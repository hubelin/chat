import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

const MessageList = ({ messages }) => (
  <section id="message-list">
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          message={message.message}
          author={message.author}
        />
      ))}
    </ul>
  </section>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessageList;
