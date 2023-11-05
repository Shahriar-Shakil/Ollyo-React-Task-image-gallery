import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [], // Array to store uploaded images
  selectedImages: [], // Array to store selected images
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload); // Add a new image
    },
    removeImage: (state, action) => {
      state.images = state.images.filter((image) => image !== action.payload); // Remove an image
      state.selectedImages = state.selectedImages.filter(
        (image) => image !== action.payload
      ); // Remove selected image, if applicable
    },
    selectImage: (state, action) => {
      if (!state.selectedImages.includes(action.payload)) {
        state.selectedImages.push(action.payload); // Select an image
      } else {
        state.selectedImages = state.selectedImages.filter(
          (image) => image !== action.payload
        ); // Deselect an image
      }
    },
  },
});

export const { addImage, removeImage, selectImage } = gallerySlice.actions;
export default gallerySlice.reducer;
