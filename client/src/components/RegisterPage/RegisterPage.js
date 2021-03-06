import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import {
  RegisterContainer,
  RegisterButton,
  RegisterForm,
} from "./RegisterPage.styles";

const RegisterPage = ({ setAlert, register, history, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Wrong Credentials",
      });
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    Toast.fire({
      icon: "success",
      title: "Successfully registered",
    });
    return <Redirect to="/" />;
  }

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={(e) => onSubmit(e)}>
        <h1>Sign Up</h1>
        <h2>Create Your Account</h2>
        <label htmlFor="name">Name</label>

        <input
          onChange={(e) => onChange(e)}
          type="text"
          name="name"
          value={name}
          required
        />

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

        <label htmlFor="confirmPassword">Confirm Password</label>

        <input
          onChange={(e) => onChange(e)}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <RegisterButton onClick={(e) => onSubmit(e)}>Register</RegisterButton>
      </RegisterForm>
      <h3>
        Already have an account? <Link to="/login">Sign In</Link>
      </h3>
    </RegisterContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
