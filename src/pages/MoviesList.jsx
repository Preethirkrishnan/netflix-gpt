import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="pl-10">
      <h1 className="text-xl text-white mb-3">{title}</h1>
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
        {movies?.map((movie) => (
          <MoviesCard key={movie.id} image={movie.image} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
