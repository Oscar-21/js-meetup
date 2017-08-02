import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar';
import styles from '../styles';

let names = [];
const prototype = Object.getPrototypeOf(Route);
for (const name of Object.getOwnPropertyNames(prototype)) {
  names.push(name);
}

const press = () => { console.log(names); }

const About = (props) => (   
  <div style={styles.About.mainStyle}>

    <NavBar home={false} about={true} account={false} signup={false} signin={false} />

    <div>About {props.name}</div>
    <button onClick={press}>Button</button>
  </div>
);
export default About;