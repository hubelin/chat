import React from 'react';
import { connect } from 'react-redux';
import AddMessage from '../components/AddMessage.jsx';
import { addMessage } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  addMessage: (message, author) => {
    dispatch(addMessage(message, author));
  }
});

const AddMessageContainer = props => (
  <div>
    <AddMessage addMessage={props.addMessage} />
  </div>
);
export default connect(
  null,
  mapDispatchToProps
)(AddMessageContainer);
