import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from './../../redux/users-reduser';
import Preloader from '../common/Preloader/Preloader';
import {UsersAPI} from './../../api/api';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>
         {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
         })
   }
 
   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>
         {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
         })
   }

   render() {
 
      return <>
      {this.props.isFetching ?  <Preloader /> : null}
      <Users currentPage={this.props.currentPage}
      users={this.props.users} 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      unfollow={this.props.unfollow} 
      follow={this.props.follow}/> 
      </>
   }
}

let mapStateToProps = (state) => { 
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}

/* let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {dispatch(followActionCreator(userId))},
      unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
      setUsers: (users) => {dispatch(setUsersAC(users))},
      setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
      setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
      toggleIsFetching: (isFetching) => {dispatch(toggleFetchingAC(isFetching))}
   }
} */

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching
}
)(UsersContainer);
