import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, summary }) => {
  return (
    <div className="pl-14 w-1/2 z-10 absolute top-3/12 text-white">
      <h1 className="text-2xl font-bold mb-5">{title}</h1>
      <div className="mb-5" dangerouslySetInnerHTML={{ __html: summary }}></div>
      <div className="flex">
        <button className="rounded py-2 px-4 bg-white text-black flex items-center gap-2 mr-2 cursor-pointer hover:bg-gray-200">
          <FaPlay />
          Play
        </button>
        <button className="rounded py-2 px-4 bg-gray-500 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
