import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/moviesSlice";
import gptSearchReducer from "./slices/gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptSearchReducer,
    },
});

export default appStore;