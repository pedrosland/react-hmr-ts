import * as React from 'react';

export interface NamerProps {
  color: string
  content: string
}

export default class Namer extends React.Component<NamerProps, undefined> {
  render(){
    let style = {color: this.props.color};
    return (
      <h1 style={style}>Hi, TSX {this.props.content}</h1>
    );
  }
}
