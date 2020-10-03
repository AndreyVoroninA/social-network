import React from 'react';
import { NavLink } from 'react-router-dom';
import initAva from '../../assets/images/initialAva.jpg';
import s from './Users.module.css';
import {UsersAPI} from './../../api/api';

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages = [];

      for (let i=1; i <= pagesCount; i++) {
         pages.push(i);
      }

   return (
      <div>
         <div className={s.selectPage}>
            {
              pages.map(p => {
                  return <span className={props.currentPage === p && s.numPage}
                  onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
               })
            }
         </div>
      {
      
         props.users.map((u) =>  (<div key={u.id}>
         <NavLink to={'/profile/' + u.id}>
         <img src={u.photos.small != null ? u.photos.small : initAva } className={s.photo} ></img>
         </NavLink>
         <div>{u.name}</div>
         <div>{u.status}</div>
         <div>{/*u.location.country*/}</div> 
         <div>{/*u.location.city*/}</div> 
         <div>
         {u.followed ? <button onClick={() => (
            UsersAPI.deleteUsers(u.id).then(data =>
            { if (data.resultCode == 0) {
                     props.unfollow(u.id)
                  }
            })
            
            )}>follow</button> 
                     : <button onClick={() => (           
               UsersAPI.postUsers(u.id).then(data =>
            {
                  if (data.resultCode == 0) {
                     props.follow(u.id)
                  }
               })
                        )}>unfollow</button>}
         </div>
      </div>)
      )
}
      </div>
   )
}

export default Users;