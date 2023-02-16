import React, { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { username, password } = inputs;
  const inputValue = (name) => (event) => {
    console.log(name, "=", event.target.value);
    setInputs({ ...inputs, [name]: event.target.value });
  };
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={inputValue("username")}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={inputValue("password")}
          />
        </div>
        <br />
        <input type="submit" value="เข้าสู่ระบบ" className="btn" />
      </form>
    </div>
  );
};

export default Login;
