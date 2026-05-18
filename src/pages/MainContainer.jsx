import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { name, summary } = mainMovie;

  return (
    <div>
      <VideoTitle title={name} summary={summary} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
