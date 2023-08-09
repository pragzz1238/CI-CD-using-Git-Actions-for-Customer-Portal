import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  
    axios.post('http://localhost:8081/api/login', { username, password }) 
      .then((res) => {
        console.log('Response from backend:', res);
        if (res.data.success) {
          window.alert('Login Successful');
          // Handle successful login, e.g., redirect to dashboard
        } else {
          window.alert('Login Failed: Invalid Credentials');
        }
      })
      .catch((err) => {
        
        if (err.response && err.response.status === 401) {
          window.alert('Login Failed: Invalid Credentials');
        } else {
          window.alert('Login Failed: Server Error');
        }
      });
  }
  

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
