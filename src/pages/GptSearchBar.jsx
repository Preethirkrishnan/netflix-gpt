import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useLanguage from "../hooks/useLanguage";

const GptSearchBar = () => {
  const language = useLanguage();

  return (
    <div className="w-1/2 mx-auto">
      <form className="grid grid-cols-12 bg-black p-3 rounded mx-auto">
        <input
          id="Search"
          type="text"
          className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded mr-2 py-2 px-4 col-span-8 text-white"
          placeholder={language.gptSearchPlaceholder}
        />
        <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white p-2 rounded col-span-4">
          {language.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
