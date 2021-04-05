
import { Component } from 'react';
import './App.css';

class App extends Component {
  //constructor
  constructor() {
    super();
    this.message = 'Good evening!!!'
  }

  // functions
  myStyle = {
    fontSize: 50,
    color: 'red'
  };

  getName = function (prefix) {
    return prefix + '. ' + 'Rahul G Rao';
  }

  render() {
    // variables
    const navBar = <nav>I am a navigation bar</nav>
    var i = 1;
    return (
      <div className="App">
        <header className="App-header">
          <span>Welcome to React, {this.getName('Mr')}</span>
          <span>{this.message}</span>

          {/* variable */}
          {navBar}

          <p style={this.myStyle}>React is awesome</p>

          {/* custom attribute */}
          <p data-myattribute="somevalue">This is the content!</p>


          <p>
            Sum of these numbers 100 and 200 = {100 + 200}
          </p>

          {/* ternary operator */}
          <p>
            {i === 1 ? "true" : "false"}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
