import { combineReducers } from "@reduxjs/toolkit";
import galleryReducer from "../features/gallerySlice";

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;
