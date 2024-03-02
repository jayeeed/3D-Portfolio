import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import PropTypes from "prop-types";

const Chat = ({ messages, isTyping, handleSend }) => (
  <MainContainer className="rounded-2xl font-semibold">
    <ChatContainer>
      <MessageList
        className="max-h-80 p-2 overflow-scroll md:overflow-x-hidden font-semibold"
        scrollBehavior="smooth"
        typingIndicator={
          isTyping ? <TypingIndicator content="Assistant is typing" /> : null
        }
      >
        <div className="max-h-full overflow-y-auto font-semibold">
          {messages.map((message, i) => (
            <Message key={i} model={message} />
          ))}
        </div>
      </MessageList>
      <MessageInput placeholder="Type message here" onSend={handleSend} />
    </ChatContainer>
  </MainContainer>
);

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  isTyping: PropTypes.bool.isRequired,
  handleSend: PropTypes.func.isRequired,
};

const ToggleChatButton = ({ onClick, showChat }) => (
  <button
    className="bg-purple-600 hover:bg-purple-900 text-white text-xl font-semibold py-6 px-4 rounded-full 
    transition-transform transform duration-500 ease-in-out"
    onClick={onClick}
  >
    {showChat ? "Close" : "Chat!!"}
  </button>
);

ToggleChatButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showChat: PropTypes.bool.isRequired,
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Assistant, Assistant of Jayed! Ask me anything!",
      sentTime: "just now",
      sender: "Assistant",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);

    try {
      const API = import.meta.env.VITE_APP_API;

      const response = await fetch(API + "/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }),
      });

      const data = await response.json();

      setMessages([
        ...newMessages,
        {
          message: data.answer,
          sender: "Assistant",
        },
      ]);

      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
      setIsTyping(false);
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div
      className={`fixed bottom-12 right-24 md:right-32 max-w-full md:max-w-sm max-h-100 rounded-lg transition-transform transform duration-2000 ease-in-out ${
        showChat ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ToggleChatButton onClick={toggleChat} showChat={showChat} />

      {showChat && (
        <Chat messages={messages} isTyping={isTyping} handleSend={handleSend} />
      )}
    </div>
  );
};

export default Chatbot;
