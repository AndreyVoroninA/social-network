import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {profileThunk} from './../../redux/profile-reducer';
import { Redirect, withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContiner extends React.Component {
  
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }
     this.props.profileThunk(userId)
   }

  render() {
   return (
      <div >
        <Profile {...this.props}/>
      </div>
    );
  } 
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
});

export default compose(
   connect(mapStateToProps, {profileThunk}),
   withRouter,
   WithAuthRedirect
)(ProfileContiner)


