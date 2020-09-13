import React from 'react';
import s from './Users.module.css'; 
import * as axios from 'axios';
import initAva from '../../assets/images/initialAva.jpg'

class Users extends React.Component {

   componentDidMount() {
   
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>
         {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }
 
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
         {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
 
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];

      for (let i=1; i <= pagesCount; i++) {
         pages.push(i);
      }
      return <div>
         <div className={s.selectPage}>
            {
              pages.map(p => {
                  return <span className={this.props.currentPage === p && s.numPage}
                  onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
               })
            }
         </div>
      {
      
      this.props.users.map((u) =>  (<div key={u.id}>
         <img src={u.photos.small != null ? u.photos.small : initAva } className={s.photo} ></img>
         <div>{u.name}</div>
         <div>{u.status}</div>
         <div>{/*u.location.country*/}</div> 
         <div>{/*u.location.city*/}</div> 
         <div>
         {u.followed ? <button onClick={() => (this.props.unfollow(u.id))}>follow</button> 
                     : <button onClick={() => (this.props.follow(u.id))}>unfollow</button>}
         </div>
      </div>)
      )
}
      </div>
   }
}

export default Users; 