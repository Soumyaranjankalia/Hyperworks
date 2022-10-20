import React, { useState } from "react";
import axios from "../Services/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [data, setData] = useState({
    name: "",
    user_name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  let name, value
  const handle = (e) => {
    name = e.target.name
    value = e.target.value
    setData({ ...data, [name]: value })
  }

  const submit = (e) => {
    console.log(data)
    axios.post('http://localhost:5100/register', data)
      .then((r) => {
        console.log(data)
        console.log(r.data)
        alert('signup Succesfull')
        navigate('/login')
      })
      .catch((err) => {
        console.log({ err: err.message })
      })
  }
  return (
    <div>
        <h3>Create New Account</h3>
        <div>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            onChange={handle}
          />
          <br />
          <input
            placeholder="Enter Your User Name"
            type="text"
            name="user_name"
            onChange={handle}
          />
          <br />
          <input
            placeholder="Enter Valid Email Address"
            type="email"
            name="email"
            onChange={handle}
          />
          <br />
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            onChange={handle}
          />
          <br />
          <button onClick={submit}>Register</button>
        </div>
        <p>
          Already Have an Account?
          <Link to="/login">Login Here</Link>
        </p>
    </div>
  );
};
