import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './Component/ChatFeed'

const App = ()=> {
  return (
    
    <ChatEngine height="100vh" projectID="8f11c77c-72a2-4135-8d8f-e679e33083fd" userName="krishna" userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
   

   
  );
}

export default App;
