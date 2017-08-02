import React from 'react';
import NavBar from '../NavBar';
import SignInForm from '../SignInForm';

const SignIn = () => (
  <div>
    <NavBar home={false} about={false} account={false} signup={false} signin={true} />
    <SignInForm />
  </div>
);
export default SignIn;

