import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { HiOutlineChatAlt } from "react-icons/hi";

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
      >
        <div className="max-h-full overflow-y-auto font-semibold">
          {messages.map((message, i) => (
            <Message key={i} model={message} />
          ))}
        </div>
        {isTyping && (
          <div className="p-2">
            <TypingIndicator content="Assistant is typing" />
          </div>
        )}
      </MessageList>
      <MessageInput
        placeholder="Type message here"
        onSend={handleSend}
        attachButton={false}
        scrollToBottom={true}
      />
    </ChatContainer>
  </MainContainer>
);

const ToggleChatButton = ({ onClick }) => (
  <button
    className="bg-purple-600 hover:bg-purple-800 py-4 px-4 rounded-full 
    transition-transform transform duration-600 ease-in-out"
    onClick={onClick}
  >
    <HiOutlineChatAlt className="text-5xl" />
  </button>
);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm Assistant, Assistant of Jayed! Ask me anything! [Offline]",
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
      const response = await fetch(import.meta.env.VITE_APP_API + "/chat", {
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

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  isTyping: PropTypes.bool.isRequired,
  handleSend: PropTypes.func.isRequired,
};

ToggleChatButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  showChat: PropTypes.bool.isRequired,
};
