import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import s from "./Header.module.css";
import { connect } from "react-redux";
import {setAuthUserData} from './../../redux/auth-reducer';
import {AuthAPI} from './../../api/api';

class HeaderContainer extends React.Component {
   componentDidMount() {
      AuthAPI.getAuth().then(data =>
      {
            if (data.resultCode === 0) {
               let {id, login, email} = data.data;
               this.props.setAuthUserData(id, login, email);
            }
         })
   }
   render() {
      return (<div className={s.header}>
         <Header {...this.props}/>
         </div>)
   }
};

let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
