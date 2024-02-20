import React, { useState } from 'react';
import "./auth.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, like sending data to the server
    console.log({ email, password });
  };

  return (
    
      <div className='wrapper' >
        <h2>Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'grid', gap: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button className='btn' type="submit">Login</button>
        </form>
      </div>
    
  );
};

export default LoginForm;
