import React from "react";

import "./SignUp.css";

import { singInWithGoogle } from "../../firebase/firebase-config";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SignUp = ({
  handleChangeConfirmPassword,
  handleChangeEmail,
  handleChangeName,
  handleChangePassword,
  handleSubmit,
  registerName,
  registerConfirmPassword,
  registerEmail,
  registerPassword,
}) => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    singInWithGoogle();
    navigate("/homepage");
  };

  return (
    <div className="SignUp_container">
      <h2 className="tittle">I do not have an account</h2>
      <span>Sign up with you email and password</span>
      <h3 className="title">Name</h3>
      <Input type="text" value={registerName} onChange={handleChangeName} />
      <h3 className="title">Email Address</h3>
      <Input type="email" value={registerEmail} onChange={handleChangeEmail} />
      <h3 className="title">Password</h3>
      <Input.Password
        value={registerPassword}
        onChange={handleChangePassword}
        placeholder="password"
        required={true}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <h3 className="title">Confirm Password</h3>
      <Input.Password
        value={registerConfirmPassword}
        onChange={handleChangeConfirmPassword}
        placeholder="password"
        required={true}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <button className="signUpBtn" onClick={handleSubmit}>
        Sign Up
      </button>
      <span>Sign up with google</span>
      <button className="signUpBtn" onClick={handleSignInWithGoogle}>
        SignIn with Google
      </button>
    </div>
  );
};

export default SignUp;
