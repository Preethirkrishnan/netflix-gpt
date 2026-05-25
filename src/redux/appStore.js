import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/moviesSlice";
import gptSearchReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptSearchReducer,
        config: configReducer,
    },
});

export default appStore;