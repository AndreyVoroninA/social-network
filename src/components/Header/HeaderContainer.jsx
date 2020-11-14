import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import s from "./Header.module.css";
import { connect } from "react-redux";
import {logoutThunk} from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
   
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

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);
