import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import loginSvg from "../../assets/login.svg";
import { auth, provider } from "../../authentication/googleAuth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleOnClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        localStorage.setItem("userName", user.displayName);

        //TODO: send a put request to backend with userData to store it in the firestore

        navigate("/home");
        // authentication(user.accessToken, navigate);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="login-container">
      <div className="login-img">
        <img src={loginSvg} alt="login-image" />
      </div>
      <div className="login-text">
        <p>
          <em>Hi Ninja</em>, Welcome to the Book Match App
        </p>
        <button className="login-button" onClick={handleOnClick}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
