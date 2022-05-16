import React from 'react'
import About from './About'

export default class Name extends React.Component {

    constructor(props) {
      super(props);
      this.state = {name: "Banana"};
    }
    render() {
      return (
        <div>
          <About/>

          <h1>{this.state.name}</h1>
        </div>
      );
    }
  }