import React from 'react';
import Namer from './Namer.js';

export default class Greeter extends React.Component {
  constructor(){
    super();
    this.state = {counter: 0};
  }

  componentWillMount(){
    this.timer = setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000);
  }

  render() {
    let name = 'peter';
    let color = 'green';
    return (
      <div>
        <Namer content={name} color={color} />
        <p>time elapsed: {this.state.counter}</p>
      </div>
    );
  }
}
