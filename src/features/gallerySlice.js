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
      const imagesToDelete = action.payload;
      console.log(imagesToDelete);
      // Remove images from state.images array
      state.images = state.images.filter((image) => {
        return !imagesToDelete.includes(image.id);
      });

      // Remove selected images from state.selectedImages array
      state.selectedImages = [];
    },
    selectImage(state, action) {
      const { imageId } = action.payload;
      const isSelected = state.selectedImages.includes(imageId);

      if (isSelected) {
        state.selectedImages = state.selectedImages.filter(
          (id) => id !== imageId
        );
      } else {
        state.selectedImages.push(imageId);
      }
    },
    bulkSelect(state) {
      if (state.selectedImages.length === 0) {
        state.selectedImages = state.images.map((image, index) => image.id); // Select all if none are selected
      } else {
        state.selectedImages = []; // Deselect all if some are selected
      }
    },
    swipePosition: (state, action) => {
      const { indexA, indexB } = action.payload;

      if (
        indexA < 0 ||
        indexA >= state.images.length ||
        indexB < 0 ||
        indexB >= state.images.length
      ) {
        return;
      }

      [state.images[indexA], state.images[indexB]] = [
        state.images[indexB],
        state.images[indexA],
      ];
    },
  },
});

export const { addImage, removeImage, selectImage, bulkSelect, swipePosition } =
  gallerySlice.actions;
export default gallerySlice.reducer;
