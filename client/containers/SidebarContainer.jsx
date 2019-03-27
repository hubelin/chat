import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar.jsx';

const mapStateToProps = state => ({ users: state.users });

const SidebarContainer = props => (
  <div>
    <button>Click me!</button>
    <Sidebar users={props.users} />
  </div>
);

export default connect(mapStateToProps)(SidebarContainer);
