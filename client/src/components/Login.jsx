import React, { useState } from "react";
import axios from "../Services/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {

  let login = JSON.parse(localStorage.getItem("login")) || [];


  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  let name, value

  const handle = (e) => {
    name = e.target.name
    value = e.target.value

    setData({ ...data, [name]: value })
  }

  const submit = (e) => {
    console.log(data)
    axios.post('http://localhost:5100/login', data)
      .then((r) => {
        console.log(r)
        alert('Login Succesfull')
        navigate('/')
        login.push(JSON.stringify(r.data))
        localStorage.setItem("login", login);
        window.location.reload()
      })
      .catch((err) => {
        console.log({ err: err.message })
      })

  }

  return (
    <div>
        <h3>Sign in to Your account</h3>
        <div>
          <input
          placeholder="Enter Email"
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
          <button onClick={submit}>Login</button>
        </div>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
    </div>
  );
};
