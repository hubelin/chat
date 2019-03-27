import React from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList.jsx';

const mapStateToProps = state => ({ messages: state.messages });
const MessageListContainer = props => {
  return (
    <div>
      <MessageList messages={props.messages} />
    </div>
  );
};

export default connect(mapStateToProps)(MessageListContainer);
