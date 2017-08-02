import React from 'react';
import NavBar from '../NavBar';
import SignUpForm from '../SignUpForm';

const SignUp = () => (
  <div>
    <NavBar home={false} about={false} account={false} signup={true} signin={false} />
    <SignUpForm />
  </div>
);
export default SignUp;
