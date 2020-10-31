import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {profileThunk, getStatus, updateStatus} from './../../redux/profile-reducer';
import { Redirect, withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContiner extends React.Component {
  
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 11688;
      };
     this.props.profileThunk(userId);
     this.props.getStatus(userId) //Thunk//
   }

  render() {
   return (
      <div >
        <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  } 
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status
});

export default compose(
   connect(mapStateToProps, {profileThunk, getStatus, updateStatus}),
   withRouter,
   WithAuthRedirect
)(ProfileContiner)


