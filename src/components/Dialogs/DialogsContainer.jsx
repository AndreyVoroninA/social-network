import React from "react";
import Dialogs from "./Dialogs";
import {actionCreateAddMessage, actionCreateUpdateNewMesText} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMesText: state.dialogsPage.newMesText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(actionCreateAddMessage())},
    updateNewMesText: (text) => {dispatch(actionCreateUpdateNewMesText(text))}
  }
}
let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;