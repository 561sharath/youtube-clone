import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "./contants";
import ButtonList from "./ButtonList";

const SearchPage = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  const fetchVideoDetails = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&type=video&part=snippet&q=${id}`
    );
    const json = await data.json();
    console.log(json);
    if (json.items && json.items.length > 0) {
      // Set the details of the first video retrieved (assuming 'id' is a single video ID)
      setVideoDetails(json.items);
    }
  };

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  return (
    <div className="w-screen h-screen">
      <ButtonList/>
      {videoDetails?.map((item, index) => (
      <Link to={"/wacth?v=" + item?.id?.videoId} key={item?.id?.videoId}>
        <div className="flex ml-5 mb-4 mt-4" >
          <img
            className="w-96 h-52 rounded-lg"
            src={item?.snippet?.thumbnails?.high?.url}
          />
          <div className="ml-3">
            <h2 className="text-xl">{item?.snippet?.title}</h2>
            <h2 className="mt-2">{item?.snippet?.publishedAt}</h2>
            <div className="flex text-justify mt-2">
              <img
                className="h-9 w-10"
                src="https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png"
              />
              <h2 className="text-justify mt-1">
                {item?.snippet?.channelTitle}
              </h2>
            </div>

            <p className="mt-2">{item?.snippet?.description}</p>
          </div>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default SearchPage;
