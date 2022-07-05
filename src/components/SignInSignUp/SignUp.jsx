import React from "react";

import "./SignUp.css";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const SignUp = () => {
  return (
    <div className="SignUp_container">
      <h1>Sign Up</h1>
      <h3 className="title">First Name</h3>
      <Input />
      <h3 className="title">Last Name</h3>
      <Input />
      <h3 className="title">Email Address</h3>
      <Input />
      <h3 className="title">Password</h3>
      <Input.Password
        placeholder="input password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <button className="signUpBtn">Sign Up</button>
      <span>sign up with google</span>
      <button className="signUpBtn">SignUp with Google</button>
    </div>
  );
};

export default SignUp;
