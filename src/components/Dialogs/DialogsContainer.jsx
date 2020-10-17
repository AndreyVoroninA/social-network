import React from "react";
import Dialogs from "./Dialogs";
import {actionCreateAddMessage, actionCreateUpdateNewMesText} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)
