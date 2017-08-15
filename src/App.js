import React, { Component } from 'react';

import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import MarkdownInput from './components/MarkdownInput.js';
import Toolbar from './components/Toolbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownInput compileMarkdown={this.props.compileMarkdown} />
        <div className="previewer">
          <Toolbar name="Previewer"/>
          <div className="rendered-content" >
          <div dangerouslySetInnerHTML={{__html: this.props.compiledMarkdown }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    compiledMarkdown: store.markdown.compiledMarkdown,
  }
})(App);
