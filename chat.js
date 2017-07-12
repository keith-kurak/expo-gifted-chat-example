import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component {
  render() {
    const giftedChatMessages = [
      {
        _id: 1,
        text: 'hello',
        createdAt: new Date(),
        user: {_id: 1},
      },
      {
        _id: 2,
        text: 'my name is',
        createdAt: new Date(),
        user: {_id: 1},
      },
      {
        _id: 3,
        text: 'what',
        createdAt: new Date(),
        user: {_id: 2},
      },
      {
        _id: 4,
        text: 'my name is',
        createdAt: new Date(),
        user: {_id: 1},
      },
      {
        _id: 5,
        text: 'what',
        createdAt: new Date(),
        user: {_id: 2},
      },
      {
        _id: 6,
        text: 'my name is',
        createdAt: new Date(),
        user: {_id: 1},
      },
      {
        _id: 7,
        text: 'what',
        createdAt: new Date(),
        user: {_id: 2},
      },
    ];
    return (
      <GiftedChat
        messages={giftedChatMessages}
        onSend={newMessages => onSend(newMessages[0].text)}
        user={{
            _id: 1,
        }}
        renderAvatar={() => null}
      />
    )
  }
}
