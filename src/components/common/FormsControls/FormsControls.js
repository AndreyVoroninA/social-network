import React from 'react';
import s from './FormsControl.module.css';

export const Textarea = ({input, meta,...props}) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={s.block}>
         <textarea {...input} {...props} className={s.addPost + " " + (hasError ? s.error : " ")}></textarea>
         <div>
           {(hasError) ? <div className={s.errorBlock}>{meta.error}</div> : ""}
         </div>
      </div>
   )
}
export const Input = ({input, meta,...props}) => {
   const hasError = meta.touched && meta.error
   return (
      <div className={s.block}>
         <input {...input} {...props} className={s.addPost + " " + (hasError ? s.error : " ")}></input>
         <div>
           {(hasError) ? <div className={s.errorBlock}>{meta.error}</div> : ""}
         </div>
      </div>
   )
}
