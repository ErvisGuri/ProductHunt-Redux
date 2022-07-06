import React, { useState } from "react";

import "./SignIn.css";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const SignIn = ({
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
  loginEmail,
  loginPassword,
}) => {
  return (
    <div className="SignUp_container">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <h3 className="title">Email Address</h3>
      <Input
        type="email"
        defaultValue={loginEmail}
        onChange={handleChangeEmail}
      />
      <h3 className="title">Password</h3>
      <Input.Password
        value={loginPassword}
        onChange={handleChangePassword}
        placeholder="password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <button className="signInBtn" onClick={handleSubmit}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
