import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"; // Import v4 as uuidv4 alias from uuid package
import { addImage } from "../features/gallerySlice";

export default function ImageUploader() {
  const dispatch = useDispatch();
  const handleChange = (info) => {
    const { file } = info;
    const data = new FileReader();
    data.addEventListener("load", () => {
      const newImage = {
        imageUrl: data.result,
        id: uuidv4(), // Generate a unique ID
      };
      dispatch(addImage(newImage));
    });
    data.readAsDataURL(file);
  };
  const beforeUpload = (file, fileList) => {
    return false;
  };
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader w-full h-full"
        showUploadList={false}
        accept="image/png, image/jpeg, image/webp"
        onChange={handleChange}
        beforeUpload={beforeUpload}
      >
        <div className="flex flex-col items-start">
          <PlusOutlined className="mx-auto mb-1" />
          <span>Add Images</span>
        </div>
      </Upload>
    </>
  );
}
