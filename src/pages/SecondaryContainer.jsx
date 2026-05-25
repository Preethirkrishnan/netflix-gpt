import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import useLanguage from "../hooks/useLanguage";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const lanaguage = useLanguage();

  if (movies === null) return;

  const movieType = movies?.nowPlayingMovies?.map((movie) => movie.type);

  const realityMovies = movies?.nowPlayingMovies?.filter(
    (movie) => movie.type === "Reality",
  );
  const animationMovies = movies?.nowPlayingMovies?.filter(
    (movie) => movie.type === "Animation",
  );

  return (
    <div className="bg-black pb-10">
      <div className="-mt-50 z-20 relative">
        <MoviesList title={lanaguage.realityMovies} movies={realityMovies} />
        <MoviesList title={lanaguage.animationMovies} movies={animationMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
