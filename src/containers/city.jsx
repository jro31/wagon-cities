import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.index);
  }

  render() {
    return (
      <div className={`list-group-item${this.props.selected ? ' chosen-one' : ''}`} onClick={this.handleClick}>{this.props.index + 1}) {this.props.city}</div>
    );
  }
}

export default City;
