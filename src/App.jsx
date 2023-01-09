import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      width="100vw"
      projectID="37e19f25-e2cb-4eb5-8202-72f4ffd1aab5"
      userName="sebapas"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
