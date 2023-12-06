import React, { useEffect, useState } from "react";


import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEOS_API } from "./contants";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const isOpen = useSelector((store) => store?.toggle?.isMenuOpen);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data1 = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data1.json();
    console.log(json,"hii")
    
    setVideoData(json.items);

  };
  return videoData?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className={`grid ${isOpen ? "grid-cols-4" : "grid-cols-5"}`}>
      {videoData?.map((items) => (
        <Link to={"/wacth?v=" + items?.id} key={items?.id}>
          <VideoCards info={items} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
