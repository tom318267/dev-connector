import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginContainer, LoginForm, LoginButton } from "./LoginPage.styles";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("Success");

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <LoginContainer>
      <LoginForm onSubmit={(e) => onSubmit(e)}>
        <h1>Login</h1>

        <label htmlFor="email">Email Address</label>

        <input
          onChange={(e) => onChange(e)}
          type="email"
          name="email"
          value={email}
          required
        />

        <label htmlFor="password">Password</label>

        <input
          onChange={(e) => onChange(e)}
          type="password"
          name="password"
          value={password}
          required
        />

        <LoginButton onClick={(e) => onSubmit(e)}>Login</LoginButton>
      </LoginForm>
      <h3>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </h3>
    </LoginContainer>
  );
};

export default LoginPage;
