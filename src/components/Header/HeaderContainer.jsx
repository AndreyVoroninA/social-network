import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import s from "./Header.module.css";
import { connect } from "react-redux";
import {authUsersThunk} from './../../redux/auth-reducer';
import {AuthAPI} from './../../api/api';

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.authUsersThunk();
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

export default connect(mapStateToProps, {authUsersThunk})(HeaderContainer);
