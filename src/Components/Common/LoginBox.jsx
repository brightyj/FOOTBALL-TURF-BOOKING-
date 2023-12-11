 import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import './LoginBox.css';
import { BASE_URL } from '../../Constants/constants';
import {useNavigate}from 'react-router-dom';

const LoginBox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    if (email.trim() === '') {
      errors.email = 'Email is required';
    }
    if (password.trim() === '') {
      errors.password = 'Password is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      // If the form is not valid, don't proceed with the API call
      return;
    }
      // Perform your API call here to send the data to the backend
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, { email, password }).then((response)=>{
        // Handle the response as needed
        if(response.data.message==="login successful"&& response.data.token){
          localStorage.setItem('token',response.data.token)
          navigate('/home');
        }
        console.log(response);
      })
    } 
       catch(err) 
       {
        console.log(err);
      }
    }

    console.log('Data submitted:', { email, password });
  

  return (
    <div className='container col-5'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}

          {errors.general && <p>{errors.general}</p>}
        </div>
        <button className='but1' type="submit">Login</button>
      </form>
    </div>
  );
  };


export default LoginBox;