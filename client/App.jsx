import React, { Component } from 'react';

import SidebarContainer from './containers/SidebarContainer.jsx';
import MessageListContainer from './containers/MessageListContainer.jsx';
import AddMessageContainer from './containers/AddMessageContainer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <SidebarContainer />
        <section id="main">
          <MessageListContainer />
          <AddMessageContainer />
        </section>
      </div>
    );
  }
}

export default App;
