import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = (props) => {

   const onSubmit = (formData) => {
      console.log(formData);
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
            <Field placeholder={"Login"} component={"input"} name={"login"}></Field>
         </div>
        <div>
          <Field placeholder={"Password"} component={"input"} name={"password"}></Field>
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

export default Login;