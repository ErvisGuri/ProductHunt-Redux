import React from "react";

import "./SignIn.css";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const SignIn = ({
  signinEmail,
  signinPassword,
  signin,
  handleChangeEmailSignIn,
  handleChangePasswordSignIn,
}) => {
  return (
    <div className="SignUp_container">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <h3 className="title">Email Address</h3>
      <Input
        required={true}
        type="email"
        defaultValue={signinEmail}
        onChange={handleChangeEmailSignIn}
      />
      <h3 className="title">Password</h3>
      <Input.Password
        required={true}
        value={signinPassword}
        onChange={handleChangePasswordSignIn}
        placeholder="password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <button className="signInBtn" onClick={signin}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
