import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonList = () => {
  const Buttons = [
    "All",
    "Gaming",
    "Sports",
    "Music",
    "Live",
    "cricket",
    "Horror",
    "Cinema",
    "Love",
    "All",
    "Gaming",
    "Sports",
    "All",
    "Gaming",
    "All",
    "Gaming",
  ];
  const navigation = useNavigate();
  const handelOnClick = (item) => {
    navigation(`/search/${item}`);
  };
  return (
    <div className="flex overflow-x-hidden ml-3">
      {Buttons.map((item, index) => {
        return (
          <div key={index}>
            <button
              className="px-3 py-1 bg-gray-200 text-black mr-3 mt-2 rounded-xl hover:bg-black hover:text-white"
              onClick={() => handelOnClick(item)}
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
