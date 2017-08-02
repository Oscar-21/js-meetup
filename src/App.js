import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Account from './components/Account';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import styles from './components/styles';

// Now we can render the view for the header
// in any component.
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div style={styles.App.mainStyle}>

        <Route 
          exact path='/'
          render={() => (<Home />)}
        />
          <Route
            path='/About' 
            render={(props) => (<About name='React' />)}
          />

          <Route
            path='/account'
            component={Account}
          />

          <Route
            path='/signup'
            component={SignUp}
          />

          <Route
            path='/login'
            component={SignIn}
          />

        </div>
      </BrowserRouter>
    );
  }
}
export default App;

