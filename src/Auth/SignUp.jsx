import React, { useState } from 'react';
// import { Link} from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, like sending data to the server
    console.log({ name, email, phoneNumber, companyName, otp });
  };

  const handleSendOtp = () => {
    // Send OTP logic, for demonstration, just setting a random number
    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(randomOtp);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Otp verification logic
    console.log('Verifying OTP:', otp);
    // You can add your OTP verification logic here
  };

  return (
    <div className='signUp__contaner'>
      <div className='wrapper'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp} style={{ display: 'grid', gap: '10px' }}>
          <label htmlFor="name" >Name:</label>
          <input className=' input-box' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

          <label htmlFor="companyName">Company Name:</label>
          <select  id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required>
            <option value="">Select Company</option>
            <option value="Cognizant">Cognizant</option>
            <option value="Kpit">Kpit</option>
            <option value="Infosys">Infosys</option>
            <option value="Tcs">Tcs</option>
            <option value="Capg">Capg</option>
          </select>

          {!isOtpSent ? (
            <button className='btn' type="button" onClick={handleSendOtp}>Generate OTP</button>
          ) : (
            <>
              <label htmlFor="otp">Enter OTP:</label>
              <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
              <button className='btn' type="button" onClick={handleVerifyOtp}>Verify OTP</button>
            </>
          )}
          <button className='btn' type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
