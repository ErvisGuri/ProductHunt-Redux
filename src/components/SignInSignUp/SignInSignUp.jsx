import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./SignInSignUp.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const SignInSignUp = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginState, setIsLoginState] = useState("login");
  const navigate = useNavigate();

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   isRegister ? handleLogin() : handleRegister();
  // };

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(
  //         login({
  //           id: authUser.uid,
  //           name: authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  // const handleLogin = () => {
  //   if (email && password !== "") {
  //     auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then((data) => alert("Logged in successfully!!!"))
  //       .catch((err) => alert(err));
  //   }
  // };
  // const handleRegister = () => {
  //   if (email && password !== "") {
  //     auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((data) => alert("Registered Successfully"))
  //       .catch((err) => alert(err));
  //   }
  // };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const login = async () => {};

  const clearRegisterInput = () => {
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerPassword !== registerConfirmPassword) {
      toast.error(`Password don't match`, {
        position: "top-center",
      });
      return;
    }

    register();
    clearRegisterInput();
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

  const clearLoginInput = () => {
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleSubmitSignIn = () => {
    navigate("/");
    clearLoginInput();
  };

  const handleChangeEmailSignIn = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleChangePasswordSignIn = (e) => {
    setLoginPassword(e.target.value);
  };

  return (
    <div className="profile_container">
      <div className="SignInUp_container">
        <div className="SignUp_container">
          <SignUp
            handleChangeName={handleChangeName}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            handleChangeConfirmPassword={handleChangeConfirmPassword}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="SignIn_container">
          <SignIn
            handleChangeEmailSignIn={handleChangeEmailSignIn}
            handleChangePasswordSignIn={handleChangePasswordSignIn}
            handleSubmitSignIn={handleSubmitSignIn}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
