import { act } from "react-dom/test-utils";
import {UsersAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';

let initialState = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
     case FOLLOW: 
     {return {
        ...state,
        users: state.users.map (u => {
           if (u.id === action.userId) {
              return {...u, followed: true}
           }
           return u;
        })
     }
   }
     case UNFOLLOW: 
     {
      return {
         ...state,
         users: state.users.map (u => {
            if (u.id === action.userId) {
               return {...u, followed: false}
            }
            return u;
         })
      }
     }
     case SET_USERS: {
        return {...state, users: action.users}
     }
     case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
     }
     case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
     }
     case TOGGLE_IS_FETCHING: {
        return {...state, isFetching: action.toggleIsFetching}
     }
     case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {...state, 
         followingInProgress: action.isFetching
         ? [...state.followingInProgress, action.userId]
         : state.followingInProgress.filter(id => id != action.userId)}
   }

   default: return state;
  }
}

export const follow = (userId) => {
   return(
      {type: FOLLOW, userId}
   )
}
export const unfollow = (userId) => {
   return(
      {type: UNFOLLOW, userId}
      )
}
export const setUsers = (users) => {
   return(
      {type: SET_USERS, users}
   )
}
export const setCurrentPage = (currentPage) => {
   return(
      {type: SET_CURRENT_PAGE, currentPage}
   )
}
export const setTotalUsersCount = (count) => {
   return(
      {type: SET_TOTAL_USERS_COUNT, count}
   )
}
export const toggleIsFetching = (toggleIsFetching) => {
   return (
      {type: TOGGLE_IS_FETCHING, toggleIsFetching}
   )
}
export const toggleFollowingProgress = (isFetching, userId) => {
   return (
      {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
   )
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
     dispatch(toggleIsFetching(true));
     dispatch(setCurrentPage(currentPage));
     UsersAPI.getUsers(currentPage, pageSize).then(data =>
      {
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount))
      })
}

export const unfollowThunk = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
   UsersAPI.deleteUsers(id).then(data =>
   { if (data.resultCode == 0) {
            dispatch(unfollow(id));
         }
         dispatch(toggleFollowingProgress(false, id));
   })
}
export const followThunk = (id) => (dispatch) => {
   dispatch(toggleFollowingProgress(true, id));        
               UsersAPI.postUsers(id).then(data =>
            {
                  if (data.resultCode == 0) {
                     dispatch(follow(id))
                  }
                  dispatch(toggleFollowingProgress(false, id));
               })
}
export default usersReducer;