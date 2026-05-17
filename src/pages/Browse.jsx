import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
    useNowPlayingMovies();

    return(
        <div>
            <MainContainer />
        </div>
    )
}

export default Browse;