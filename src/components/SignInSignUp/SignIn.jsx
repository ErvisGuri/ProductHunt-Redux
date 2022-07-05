import React from "react";

import "./SignIn.css";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const SignIn = () => {
  return (
    <div className="SignUp_container">
      <h1>Sign In</h1>

      <h3 className="title">Email Address</h3>
      <Input />
      <h3 className="title">Password</h3>
      <Input.Password
        placeholder="input password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <button className="signInBtn">Sign In</button>
    </div>
  );
};

export default SignIn;
