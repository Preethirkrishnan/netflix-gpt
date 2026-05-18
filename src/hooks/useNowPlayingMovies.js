import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slices/moviesSlice";

const useNowPlayingMovies = () => {
const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch("https://api.tvmaze.com/shows");
      const json = await data.json();
      dispatch(addNowPlayingMovies(json));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
