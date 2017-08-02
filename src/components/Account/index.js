import React from 'react';
import NavBar from '../NavBar';
/* var React = require('react'); */

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
       userName: '',
       markup: [],
    };
  }



  componentWillMount() {
    fetch('http:/homestead.app/api/userName'
    ).then( response => {
      return response.json();
    }).then( user => {
      this.setState({ userName: user })    
    });
    console.log('userName set and component mounted');
  } 


  /*componentWillMount() {
    fetch('http://homestead.app/api/userName'
    ).then(function(response) {
      return response.json();
    }).then(function(user) {
      this.setState({ userName: user }) 
    }.bind(this));*/
   

/*  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      this.setState({ markup: 
        <div>
          <h1>{this.state.userName} Account Information</h1> 
          <input style={{width: '40%'}} type="text" onChange={this.changeUserName} />
          <button style={{width: '40%'}} onClick={this.bob}>Button</button>
        </div>
      });
      console.log('userName updated and component rerendered');
    } else if (prevState.userName === this.state.userName) {
      console.log('userName not updated');
    }
  }*/

  
  changeUserName = function(e) {
    this.setState({userName: e.target.value}); 
  }.bind(this);

/*  changeUserName = e => {
    this.setState({userName: e.target.value}); 
  } */

  bob = () => {
    this.setState({userName: 'Bob'});
  }


foo = () => {
  let names = [];
  for (const name of Object.getOwnPropertyNames(Account)) {
    names.push(name);
  }
  console.log(names);
}

  CheckIfUserSet = () => {
    const markup =

      React.createElement(
        'div',
        null,

          React.createElement(
            'h1',
            null,
            this.state.userName,
            ' Account Information'
          ),

          React.createElement(
            'input', 
            { 
              style: { width: '40%' }, 
              type: 'text', 
              onChange: this.changeUserName 
            }
          ),

          React.createElement(
            'button',
            { 
              style: { width: '40%' }, 
              onClick: this.bob 
            },
            'Button'
          ),
      );

    if (this.state.userName !== '') {
      console.log(' return markup');
      return (
        markup
      );
    } else {
      console.log( 'this.state.userName = \'\'');
    }
  } 

/*  CheckIfUserSet = () => {
    const markup =
        <div>
          {<h1 key={0}>{this.state.userName} Account Information</h1>} 
          {<input key={1} style={{width: '40%'}} type="text" onChange={this.changeUserName} />}
          {<button key={2} style={{width: '40%'}} onClick={this.bob}>Button</button>}
        </div>

    if (this.state.userName !== '') {
      console.log(' return markup');
      return (
        markup
      );
    } else {
      console.log( 'this.state.userName = \'\'');
    }
  } */
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    return ( 
      <div style={{display: 'flex', flexDirection: 'row'}}>


        <NavBar home={false} about={false} account={true} signup={false} signin={false} />

        <div style={style}>
          {this.CheckIfUserSet()}
        </div>
        <button onClick={this.foo}  >button</button>
      </div>
    );
  }
}
export default Account;
