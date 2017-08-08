import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar';
import styles from '../styles';

const About = (props) => (   
  <div style={styles.About.mainStyle}>

    <NavBar home={false} about={true} account={false} signup={false} signin={false} />
    <div>About {props.name}</div>
  </div>
);
export default About;
