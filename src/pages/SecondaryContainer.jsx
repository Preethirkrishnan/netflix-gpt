import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (movies === null) return;
  console.log(movies);

  const movieType = movies?.nowPlayingMovies?.map((movie) => movie.type);

  console.log([...new Set(movieType)]);

  const realityMovies = movies?.nowPlayingMovies?.filter(
    (movie) => movie.type === "Reality",
  );
  const animationMovies = movies?.nowPlayingMovies?.filter(
    (movie) => movie.type === "Animation",
  );

  console.log(realityMovies, animationMovies);

  return (
    <div className="bg-black pb-10">
      <div className="-mt-50 z-20 relative">
        <MoviesList title="Reality Movies" movies={realityMovies} />
        <MoviesList title="Animation Movies" movies={animationMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
