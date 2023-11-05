import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Checkbox } from "antd";
import { selectImage } from "../features/gallerySlice";
import ImageUploader from "./ImageUploader";

export default function ImageGallery() {
  const images = useSelector((state) => state.gallery?.images);
  const selectedImages = useSelector((state) => state.gallery?.selectedImages);
  const dispatch = useDispatch();

  const handleOnSelect = (id, checked) => {
    dispatch(selectImage({ imageId: id }));
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className={`relative  border   ${
              index === 0 ? "col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            <div className="absolute -top-12 lg:-top-5 lg:left-5 h-3 z-50">
              <Checkbox
                checked={selectedImages?.includes(item.id)}
                onChange={(e) => handleOnSelect(item.id, e.target.checked)}
              ></Checkbox>
            </div>
            <img
              className={`${
                selectedImages?.includes(item.id) ? "contrast-50" : ""
              } object-cover`}
              src={item.imageUrl}
              alt=""
            />

            <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
          </div>
        ))}
        <div className="relative col-span-1 flex items-center justify-center ">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
