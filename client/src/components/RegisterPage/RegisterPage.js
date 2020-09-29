import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RegisterContainer,
  RegisterButton,
  RegisterForm,
} from "./RegisterPage.styles";

const RegisterPage = () => {
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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("Success");
      // const newUser = {
      //   name,
      //   email,
      //   password,
      //   confirmPassword,
      // };
      // try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const body = JSON.stringify(newUser);
      //   const res = await axios.post("/api/users", body, config);
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
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

export default RegisterPage;
