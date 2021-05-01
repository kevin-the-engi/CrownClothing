import React, { useState } from 'react';
import './SignIn.scss';
import { signInWithGoogle } from '../../firebase/firebase.util.js';

import FormInput from '../FormInput/FormInput.jsx';
import CustomButton from '../CustomButton/CustomButton.jsx';

const SignIn = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInInfo({
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={signInInfo.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signInInfo.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
      </form>
    </div>
  )
}

export default SignIn;