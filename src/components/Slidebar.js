import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Slidebar = () => {
  const isOpen = useSelector((store) => store?.toggle?.isMenuOpen);

  const navigation = useNavigate();
  const onClickHandle = (name) => {
    if (name=="/"){
      navigation("/")
    }
    else{
      navigation(`/search/${name}`);
    }
    
  };

  if (!isOpen) return null;

  return (
    <div className="px-6 py-3  h-auto cursor-pointer">
      <div className="">
        <div className=" bg-white ">
          <ul>
            <li className="py-2" onClick={() => onClickHandle("/")}>
              Home
            </li>
            <li className="py-2" onClick={() => onClickHandle("shorts")}>
              shorts
            </li>
            <li className="py-2" onClick={() => onClickHandle("videos")}>
              Videos
            </li>
            <li className="py-2" onClick={() => onClickHandle("subscriptions")}>
              Subscriptions
            </li>
          </ul>

          <hr className="w-[8rem] bg-black" />

          <h1 className="font-bold pt-3">Intersrets</h1>

          <ul>
            <li className="py-2" onClick={() => onClickHandle("music")}>
              Music
            </li>
            <li className="py-2" onClick={() => onClickHandle("sports")}>
              sports
            </li>
            <li className="py-2" onClick={() => onClickHandle("gaming")}>
              Gaming
            </li>
            <li className="py-2" onClick={() => onClickHandle("live")}>
              Live
            </li>
            <li className="py-2" onClick={() => onClickHandle("coding")}>
              Coding
            </li>
          </ul>

          <hr className="w-[8rem] bg-black" />

          <h1 className="font-bold pt-3">Wacth Later</h1>

          <ul>
            <li className="py-2" onClick={() => onClickHandle("music")}>
              Music
            </li>
            <li className="py-2" onClick={() => onClickHandle("sports")}>
              sports
            </li>
            <li className="py-2" onClick={() => onClickHandle("gaming")}>
              Gaming
            </li>
            <li className="py-2" onClick={() => onClickHandle("live")}>
              Live
            </li>
            <li className="py-2" onClick={() => onClickHandle("coding")}>
              Coding
            </li>
            <li className="py-2" onClick={() => onClickHandle("shorts")}>
              shorts
            </li>
            <li className="py-2" onClick={() => onClickHandle("videos")}>
              Videos
            </li>
            <li className="py-2" onClick={() => onClickHandle("music")}>
              Music
            </li>
          </ul>
          <hr className="w-[8rem] bg-black" />

          <h1 className="font-bold pt-3">Subscriptions</h1>
          <ul>
            <li className="py-2" onClick={() => onClickHandle("sports")}>
              sports
            </li>
            <li className="py-2" onClick={() => onClickHandle("gaming")}>
              Gaming
            </li>
            <li className="py-2" onClick={() => onClickHandle("live")}>
              Live
            </li>
            <li className="py-2" onClick={() => onClickHandle("coding")}>
              Coding
            </li>
            <li className="py-2" onClick={() => onClickHandle("shorts")}>
              shorts
            </li>
            <li className="py-2" onClick={() => onClickHandle("videos")}>
              Videos
            </li>
            <li className="py-2" onClick={() => onClickHandle("music")}>
              Music
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
