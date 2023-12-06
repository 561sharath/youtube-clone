import React from "react";
import { useSelector } from "react-redux";

const VideoCards = ({ info }) => {
  const isOpen = useSelector((store) => store?.toggle?.isMenuOpen);

  function truncateSentence(sentence, maxLength) {
    const words = sentence.length;
    const leni = maxLength - words;

    if (words > maxLength) {
      const truncatedWords = sentence.slice(0, maxLength);

      return truncatedWords + "...";
    }
    return sentence + ".".repeat(leni);
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, localized, publishedAt } = snippet;

  const originalSentence = snippet.title;

  const maxLength = 50;
  const Sentence = truncateSentence(originalSentence, maxLength);
  return (
    <div
      className={`p-2 mr-4 mb-3 mt-2 ${
        isOpen ? "w-[19rem]" : "w-[18rem]"
      } h-80 shadow-lg rounded-lg `}
    >
      <img className=" rounded-lg" src={thumbnails.medium.url} />
      <ul className="p-2">
        <li className="font-bold ">{Sentence}</li>
        <li>{channelTitle}</li>

        <li>{statistics.viewCount} Views </li>
      </ul>
    </div>
  );
};

export default VideoCards;
