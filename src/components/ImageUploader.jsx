import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"; // Import v4 as uuidv4 alias from uuid package
import { addImage } from "../features/gallerySlice";

export default function ImageUploader() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const handleChange = (info) => {
    const { file } = info;
    const localImageUrl = window.URL.createObjectURL(file);
    const newImage = {
      imageUrl: localImageUrl,
      id: uuidv4(), // Generate a unique ID
    };
    dispatch(addImage(newImage));
  };
  console.log(data);
  const beforeUpload = (file, fileList) => {
    return false;
  };
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader w-full"
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
