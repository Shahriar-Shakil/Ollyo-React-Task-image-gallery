import { Checkbox } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectImage } from "../features/gallerySlice";

export default function ImageItem({ item, index }) {
  const dispatch = useDispatch();

  const handleOnSelect = (id, checked) => {
    dispatch(selectImage({ imageId: id }));
  };
  const selectedImages = useSelector((state) => state.gallery?.selectedImages);

  return (
    <>
      <div
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
    </>
  );
}
