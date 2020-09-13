import React from "react";
import Dialogs from "./Dialogs";
import {actionCreateAddMessage, actionCreateUpdateNewMesText} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMesText: state.dialogsPage.newMesText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(actionCreateAddMessage())},
    updateNewMesText: (text) => {dispatch(actionCreateUpdateNewMesText(text))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;