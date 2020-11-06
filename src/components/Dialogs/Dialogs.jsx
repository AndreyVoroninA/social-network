import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from './../../utils/validators/validators';
import {Textarea} from './../common/FormsControls/FormsControls';

const Dialogs = (props) => {

  let dialogsEl = props.dialogsData.map((d) => (
    <DialogItem ava={d.ava} name={d.name} id={d.id} />
  ));

  let messagesEl = props.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let viewMessage = (values) => {
    return (
    props.addMessage(values.newMessage)
    )
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsEl}</div>
      <div className={s.messages}>{messagesEl}</div>
      <DialogsReduxForm onSubmit={viewMessage}/>
    </div>
  );
};

let maxLength = maxLengthCreator(15);
const DialogsForm = (props) => {
  return(
    <form className={s.addmessage} onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={'newMessage'} placeholder={"Enter your message"}
      validate={[requiredField, maxLength]}></Field>
        <button>Отправить</button>
      </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm'})(DialogsForm)

export default Dialogs;
