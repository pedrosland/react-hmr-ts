import React from 'react';

export default class Namer extends React.Component {
  render(){
    let style = {color: this.props.color};
    return (
      <h1 style={style}>Hi, {this.props.content}</h1>
    );
  }
}
