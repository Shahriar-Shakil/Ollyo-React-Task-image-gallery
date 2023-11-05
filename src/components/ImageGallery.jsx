import React from "react";
import img1 from "../assets/images/image-1.webp";
import img2 from "../assets/images/image-2.webp";
import img3 from "../assets/images/image-3.webp";
import img4 from "../assets/images/image-4.webp";
import img5 from "../assets/images/image-5.webp";
import img6 from "../assets/images/image-6.webp";
import img7 from "../assets/images/image-7.webp";
import img8 from "../assets/images/image-8.webp";
import img9 from "../assets/images/image-9.webp";
import img10 from "../assets/images/image-10.jpeg";
import img11 from "../assets/images/image-11.jpeg";

import { Checkbox } from "antd";
import ImageUploader from "./ImageUploader";

export default function ImageGallery() {
  const onChange = (e) => {
    e.stopPropagation();
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div className="relative group border  col-span-2 row-span-2 ">
          <div className="absolute -top-5 left-10 h-3 z-50">
            <Checkbox onChange={onChange}></Checkbox>
          </div>
          <img className="object-contain" src={img1} alt="" />
          <div className="absolute hidden group-hover:block inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img2} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img3} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img4} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img5} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1 ">
          <img className="object-contain" src={img6} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img7} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img8} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img9} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img10} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <img className="object-contain" src={img11} alt="" />
          <div className="absolute inset-0 bg-slate-400 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-70 z-20"></div>
        </div>
        <div className="relative border  col-span-1">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
