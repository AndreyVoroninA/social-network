import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {setUserProfile} from './../../redux/profile-reducer';
import * as axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContiner extends React.Component {
  
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }

      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response =>
         {
            this.props.setUserProfile(response.data);
         })
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
   setUserProfile
}
)(WithUrlDataContainerComponent);

