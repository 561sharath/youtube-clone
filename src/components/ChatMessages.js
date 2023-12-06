import React from "react";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm m-1 p-2">
      <img
        className="w-10 h-10"
        alt="logo"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <h1 className="font-bold px-2">{name} :</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default ChatMessages;
