import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
    <div className="toolbar">
     {this.props.name}
    </div>

    );
  }
}

export default Toolbar;
