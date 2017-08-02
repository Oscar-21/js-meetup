import React from 'react';
import NavBar from '../NavBar';
import ShowImage from '../ShowImage';


const Home = () => (
  <div>
    <NavBar home={true} about={false} account={false} signup={false} signin={false} />
    <h1>Home</h1>
    <ShowImage />
  </div>
);
export default  Home;