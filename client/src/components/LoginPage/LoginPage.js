import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { LoginContainer, LoginForm, LoginButton } from "./LoginPage.styles";
import { login } from "../../actions/auth";

const LoginPage = ({ login, isAuthenticated }) => {
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

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
