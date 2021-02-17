import React, { Component } from 'react'

class Button extends Component {

  clickButton = (() => 
    alert("Button Clicked")
  ) 
    
  render() {
    return (
      <button onClick={this.clickButton}>Click Me</button>
    );
  }
}

export default Button;