import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import './NavBar.css';
import logo from './logo.svg';
import styles from '../styles.js'

/*this.showProps = (props) => {
  console.log(props)
}*/

const NavBar = props => (
  <div style={styles.NavBar.sideBar}>
  {/*this.showProps(props)*/}

    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='overlay' width='thin' visible={true} icon='labeled' vertical inverted>

        <div style={styles.NavBar.logoStyle}>

          <Menu.Item name='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </Menu.Item>
        </div>

        <Link to ="/home">
          <Menu.Item name='home' active={props.home}>
            <Icon name='home' />
            Home
          </Menu.Item>
        </Link>

        <Link to ="/about">
          <Menu.Item name='about' active={props.about}>
            <Icon name='gamepad' />
            About
          </Menu.Item>
        </Link>

        <Link to ="/account">
          <Menu.Item name='account' active={props.account}>
            <Icon name='camera' />
            Account
          </Menu.Item>
        </Link>

        <Link to ="/signup">
          <Menu.Item name='signup' active={props.signup}>
            <Icon name='camera' />
            Sign up
          </Menu.Item>
        </Link>


        <Link to ="/login">
          <Menu.Item name='login' active={props.signin}>
            <Icon name='camera' />
            Sign in
          </Menu.Item>
        </Link>


      </Sidebar>
    </Sidebar.Pushable>
  </div>
);
export default NavBar;