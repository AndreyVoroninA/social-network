import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {loginThunk} from './../../redux/auth-reducer';

const Login = (props) => {

   const onSubmit = (formData) => {
      props.loginThunk(formData.email, formData.password, formData.rememberMe);
   }
   if (props.isAuth) {
     return <Redirect to="/profile"/>
   }

   return <div>
      <h1>You must register!</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

const LoginForm = (props) => {
return (
   <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Email"} component={"input"} name={"email"}></Field>
         </div>
        <div>
          <Field placeholder={"Password"} component={"input"} name={"password"} type={"password"}></Field>
       </div>
         <div>
           <Field type={"checkbox"} component={"input"} name={"rememberMe"}></Field><span>remember me</span>
         </div>
       <div>
            <button>Login</button>
       </div>
    </form>
    )}

    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

    const mapStateToProps = (state) => ({
       isAuth: state.auth.isAuth
    })
export default connect(mapStateToProps, {loginThunk})(Login);