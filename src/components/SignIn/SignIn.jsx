import React, { useState } from 'react';
import './SignIn.scss';

const SignIn = () => {
  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: ''
  })

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSubmit = (e) => {
    const { name, value } = e.target;

    setSignInInfo({
      [name]: value
    })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={signInInfo.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          name="password"
          value={signInInfo.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  )
}

export default SignIn;