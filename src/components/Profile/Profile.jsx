import React from "react";

import "./Profile.css";
import SignIn from "../SignInSignUp/SignIn";
import SignUp from "../SignInSignUp/SignUp";

const Profile = () => {
  return (
    <div className="profile_container">
      <h1>Profile Page</h1>
      <div className="SignInUp_container">
        <div className="SignUp_container">
          <SignUp />
        </div>
        <div className="SignIn_container">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Profile;
