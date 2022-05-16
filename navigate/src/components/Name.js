import React from 'react'
import About from './About'
import Back from "./Back"

export default class Name extends React.Component {

    constructor(props) {
      super(props);
      this.state = {name: "Banana"};

    }
    render() {
      return (
        <div>

          <Back />

          <About />

          <h1>{this.state.name}</h1>
        </div>
      );
    }
  }