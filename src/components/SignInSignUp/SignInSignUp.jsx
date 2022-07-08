import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Signin } from "../../features/userSlice";
import "./SignInSignUp.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const SignInSignUp = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeSignUp = () => {
    setIsVisible(true);
  };
  const handleChangeSignIn = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isRegister ? signin() : register();

    clearRegisterInput();
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      handleChangeSignIn();
      toast.success(`LogIn done successfully!`, {
        position: "bottom-left",
      });
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
      });
    }
  };

  const signin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signinEmail,
        signinPassword
      );
      dispatch(Signin(user));
      console.log(user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
    navigate("/homepage");
    clearSigninInput();
  };

  const clearRegisterInput = () => {
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterConfirmPassword("");
  };

  const handleChangeName = (e) => {
    setRegisterName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setRegisterEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setRegisterPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setRegisterConfirmPassword(e.target.value);
  };

  const clearSigninInput = () => {
    setSigninEmail("");
    setSigninPassword("");
  };

  const handleSubmitSignIn = () => {
    navigate("/homepage");
  };

  const handleChangeEmailSignIn = (e) => {
    setSigninEmail(e.target.value);
  };

  const handleChangePasswordSignIn = (e) => {
    setSigninPassword(e.target.value);
  };

  return (
    <div className="profile_container">
      <nav>
        <div className="loginNav">
          <span className="logoSIO">Product Hunt Web</span>
          <div className="signInOUT">
            <span onClick={handleChangeSignIn}>Sign In</span>
            <span onClick={handleChangeSignUp}>Sign Up</span>
          </div>
        </div>
      </nav>
      <div className="SignInUp_container">
        {isVisible ? (
          <div className="SignUp_container">
            <SignUp
              handleChangeName={handleChangeName}
              handleChangeEmail={handleChangeEmail}
              handleChangePassword={handleChangePassword}
              handleChangeConfirmPassword={handleChangeConfirmPassword}
              handleSubmit={handleSubmit}
            />
          </div>
        ) : (
          <div className="SignIn_container">
            <SignIn
              signinEmail={signinEmail}
              signinPassword={signinPassword}
              signin={signin}
              handleChangeEmailSignIn={handleChangeEmailSignIn}
              handleChangePasswordSignIn={handleChangePasswordSignIn}
              handleSubmitSignIn={handleSubmitSignIn}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInSignUp;
