import * as React from 'react';
import Namer from './Namer';

export interface GreeterState {
  counter: number;
}

export default class Greeter extends React.Component<undefined, GreeterState> {
  timer: any

  constructor(){
    super();
    this.state = {counter: 0};
  }

  componentWillMount(){
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    let name = 'Rui';
    let color = 'green';
    return (
      <div>
        <Namer content={name} color={color} />
        <p>time elapsed: {this.state.counter}</p>
      </div>
    );
  }
}
