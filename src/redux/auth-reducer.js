import { stopSubmit } from 'redux-form';
import {AuthAPI} from './../api/api';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_USER_DATA: 
     return {
      ...state,
      ...action.payload
     }
   default: return state;
}
}

export const setAuthUserData = (userId, login, email, isAuth) => {
   return (
      {type: SET_USER_DATA, payload: {userId, login, email, isAuth}}
   )
}

export const authUsersThunk = () => (dispatch) => {
   return AuthAPI.getAuth().then(data =>
      {
            if (data.resultCode === 0) {
               let {id, login, email} = data.data;
               dispatch(setAuthUserData(id, login, email, true));
            }
         })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
   
   
   AuthAPI.login(email, password, rememberMe).then(response =>
      {
        if (response.data.resultCode === 0) {
           dispatch(authUsersThunk());
        } else {
           let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error/are you a hacker?";
         dispatch(stopSubmit("login", {_error: message}));
        }
      });
}
export const logoutThunk = () => (dispatch) => {
   AuthAPI.logout().then(response => 
      {
         dispatch(setAuthUserData(null, null, null, false));
      })
}
export default authReducer;