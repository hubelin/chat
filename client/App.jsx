import React, { Component } from 'react';

import SidebarContainer from './containers/SidebarContainer.jsx';
import MessageListContainer from './containers/MessageListContainer.jsx';
import AddMessageContainer from './containers/AddMessageContainer.jsx';
import './App.css';

import { showMessages } from './socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: 'None'
    };
    this.test = this.test.bind(this);
  }

  test() {
    showMessages((err, messages) =>
      this.setState({
        messages
      })
    );
  }

  render() {
    return (
      <div id="container">
        <button onClick={this.test} />
        <SidebarContainer />
        <section id="main">
          {this.state.messages}
          <MessageListContainer />
          <AddMessageContainer />
        </section>
      </div>
    );
  }
}

export default App;
