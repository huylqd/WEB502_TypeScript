import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();
  const { onSignIn } = props;
  const [data, setData] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSignIn(data);
  };
  return (
    <div className="container my-4">
      <h1>Sign In</h1>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onHandleChange}
          />
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
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
