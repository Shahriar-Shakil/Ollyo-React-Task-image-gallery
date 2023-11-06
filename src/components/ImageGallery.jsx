import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import { selectImage } from "../features/gallerySlice";
import ImageUploader from "./ImageUploader";

import ImageItem from "./ImageItem";
import { useDrop } from "react-dnd";

export default function ImageGallery() {
  const images = useSelector((state) => state.gallery?.images);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((item, index) => (
          <ImageItem key={index} item={item} index={index} />
        ))}
        <div className="relative col-span-1 flex items-center justify-center ">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
