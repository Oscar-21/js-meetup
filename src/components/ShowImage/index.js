import React, { Component } from 'react';

class ShowImage extends Component {
  constructor(props) {
    super();
    this.state = {
      avatar: [],
    };
  }
  componentWillMount() {
      fetch('http://react.app/api/showImage'
    ).then(response => {
      return response.json();
      }).then(json => {
          this.setState({ avatar: json.avatar });
      });
  }
  render() {
    return ( 
      <div>
        <img src={this.state.avatar} alt="" /> 
      </div>
    );
  }
}
export default ShowImage;
