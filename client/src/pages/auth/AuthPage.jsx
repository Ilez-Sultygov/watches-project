import React, { useState } from "react";
import SignUpForm from "./forms/SignUpForm";
import SignInForm from "./forms/SignInForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-tabs">
          <button
            className={`auth-tab ${isSignUp ? "active" : ""}`}
            onClick={() => setIsSignUp(true)}
          >
            Регистрация
          </button>
          <button
            className={`auth-tab ${!isSignUp ? "active" : ""}`}
            onClick={() => setIsSignUp(false)}
          >
            Вход
          </button>
        </div>

        {isSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <SignInForm setUser={setUser} />
        )}
      </div>
    </div>
  );
}
