import { Checkbox } from "antd";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { selectImage, swipePosition } from "../features/gallerySlice";

export default function ImageItem({ item, index }) {
  const dropTargetRef = useRef(null);
  const selectedImages = useSelector((state) => state.gallery?.selectedImages);
  const dispatch = useDispatch();

  const handleOnSelect = (id, checked) => {
    dispatch(selectImage({ imageId: id }));
  };

  const handleDrop = (item, monitor) => {
    const dropAreaIndex = dropTargetRef.current.dataset.index; // Retrieve
    const dragItemIndex = item["index"];
    dispatch(swipePosition({ indexA: dragItemIndex, indexB: dropAreaIndex }));
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { ...item, index: index },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <div
      ref={drop}
      className={` border ${
        index === 0 ? "col-span-2 row-span-2" : "col-span-1"
      } ${isOver ? " border-blue-300 border-2 scale-105" : ""} `}
    >
      <div
        data-index={index}
        ref={dropTargetRef}
        className="relative group h-full "
      >
        <div className="absolute -top-12 lg:-top-5 lg:left-5 h-3 z-50 ">
          <Checkbox
            checked={selectedImages?.includes(item.id)}
            onChange={(e) => handleOnSelect(item.id, e.target.checked)}
          ></Checkbox>
        </div>
        <img
          draggable="true"
          ref={drag}
          className={`${
            selectedImages?.includes(item.id) ? "contrast-50" : ""
          } object-cover h-full main-content `}
          src={item.imageUrl}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-20"></div>
      </div>
    </div>
  );
}
