import { Checkbox } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bulkSelect, removeImage } from "../features/gallerySlice";

export default function TopActionBar() {
  const selectedImages = useSelector((state) => state.gallery?.selectedImages);
  const dispatch = useDispatch();

  const handleBulkMark = (e) => {
    dispatch(bulkSelect());
  };
  const handleDelete = () => {
    dispatch(removeImage(selectedImages));
  };
  return (
    <div className="h-16 flex justify-between items-center">
      <div>
        <div className="flex gap-2 items-center">
          <Checkbox
            checked={selectedImages?.length}
            onChange={handleBulkMark}
            className=""
            title={selectedImages?.length ? "Unmark All" : "Mark All"}
          />
          <p className="text-black leading-4 font-bold">
            {selectedImages?.length} Files Selected
          </p>
        </div>
      </div>
      {selectedImages?.length ? (
        <button
          onClick={handleDelete}
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
