import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";


import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {

  const [liveMessages,setLiveMessages]=useState("")
  const dispatch=useDispatch()
  const chatMessages = useSelector((store) => store?.chat?.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className=" ml-2 p-2 border border-black rounded-lg w-full bg-gray-200">
      <div className="font-bold text-center ">
      Live Chat
        </div>
        </div>
      <div className="w-full h-[480px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        
        <div>
          {
            
            chatMessages?.map((c, i) => (
              <ChatMessages key={i} name={c?.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "sharath",
              message: liveMessages,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          placeholder="write a message"
          value={liveMessages}
          onChange={(e) => {
            setLiveMessages(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100 hover:bg-green-400">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
