import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {profileThunk} from './../../redux/profile-reducer';
import { withRouter } from "react-router-dom";

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
   profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContiner)
export default connect(mapStateToProps, {
   profileThunk
}
)(WithUrlDataContainerComponent);


