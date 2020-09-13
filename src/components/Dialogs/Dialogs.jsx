import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsEl = props.dialogsData.map((d) => (
    <DialogItem ava={d.ava} name={d.name} id={d.id} />
  ));

  let messagesEl = props.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.updateNewMesText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsEl}</div>
      <div className={s.messages}>{messagesEl}</div>
      <div className={s.addmessage}>
        <textarea
          onChange={onChangeMessage}
          ref={newMessageElement}
          value={props.newMesText}/>
        <button onClick={onAddMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Dialogs;
