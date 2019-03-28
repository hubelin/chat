import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar.jsx';
import { fetchSW } from '../actions/actions';

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  fetchSW: () => dispatch(fetchSW())
});

const SidebarContainer = props => (
  <div>
    <button onClick={props.fetchSW}>Click me!</button>
    <Sidebar users={props.users} />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
