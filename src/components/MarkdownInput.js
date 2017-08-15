import React, { Component } from 'react';

import Toolbar from './Toolbar.js';


class MarkdownInput extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.compileMarkdown(event.target.value);
  }

  handleSubmit(event) {
    this.setState({value: event.target.value});
    this.props.compileMarkdown(event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="editor">
        <Toolbar name="Editor"/>
        <textarea id="user-input-textbox" value={this.state.value} onChange={this.handleChange}>
        
        </textarea>
      </div>
    );
  }
}

export default MarkdownInput
