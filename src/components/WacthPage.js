import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSearchParams } from "react-router-dom";
import { TOGGLE_CLOSE } from "../Utils/ToggleSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WacthPage = () => {
  const [serachVideo] = useSearchParams();
  //console.log(serachVideo.get("v"));
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(TOGGLE_CLOSE(false));

    return () => dispacth(TOGGLE_CLOSE(true));
  }, [serachVideo]);
  return (
    <div className="flex flex-col w-full ">
      <div className="  px-5 mt-5 flex w-full ">
        <div className="">
          <iframe
            className="rounded-lg"
            width="900"
            height="562"
            src={"https://www.youtube.com/embed/" + serachVideo.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="ml-4 mt-2 flex">
        <img
          className="h-14 w-14"
          alt="account-log"
          src="https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png"
        />
        <div className="flex flex-col">
          <p className="text-lg font-bold">channelTitle</p>
          <p className="text-base">1M subscribers</p>
        </div>
        <div className="flex gap-60">
          <div>
            <p className=" bg-black rounded-full px-6 py-2 text-white mt-2 ml-2">subscribe</p>
          </div>
          <div className="flex">
            
            <p className="px-4 py-2 mt-2 border border-black rounded-l-full bg-gray-300">12.k👍</p>
            <p className="px-4 py-2 mt-2 border border-black rounded-r-full bg-gray-300">👎</p>
            <p className="px-4 py-2 mt-2 border border-black ml-3 rounded-l-full rounded-r-full bg-gray-300">Share</p>
            <p className="px-4 py-2 mt-2 border border-black ml-3 rounded-full bg-gray-300">⬇️Download</p>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default WacthPage;
