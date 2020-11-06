import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {loginThunk} from './../../redux/auth-reducer';
import {requiredField} from './../../utils/validators/validators';
import {Input} from './../common/FormsControls/FormsControls';
import style from './../common/FormsControls/FormsControl.module.css';

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
            <Field placeholder={"Email"} component={Input} name={"email"}
            validate={[requiredField]}></Field>
         </div>
        <div>
          <Field placeholder={"Password"} component={Input} name={"password"} type={"password"}
          validate={[requiredField]}></Field>
       </div>
         <div>
           <Field type={"checkbox"} component={"input"} name={"rememberMe"}></Field><span>remember me</span>
         </div>

        {props.error && <div className={style.globalError}> {props.error}</div>}
        
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