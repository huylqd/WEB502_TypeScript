import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onSignUp(data);
    navigate("/admin/signin");
  };
  return (
    <div className="container my-4">
      <h1>SignUp</h1>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onHandleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={onHandleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
