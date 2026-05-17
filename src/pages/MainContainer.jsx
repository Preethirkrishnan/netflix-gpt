import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];
    const {name, summary} = mainMovie;

    console.log(mainMovie);

  return (
    <VideoTitle title={name} summary={summary} />
  )
}

export default MainContainer;