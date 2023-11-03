import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";

export const store = configureStore({
  reducer: {
    feedPosts: postsSlice.reducer,
  },
});

export default store;
