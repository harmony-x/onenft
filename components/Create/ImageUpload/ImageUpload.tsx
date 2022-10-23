import { getBase64 } from "$utils/functions";
import Image from "next/image";
import React, { useState } from "react";
import {
  StyledImageUpload,
  StyledImageUploadInner,
} from "./ImageUpload.styles";
import { IImageUploadProps } from "./ImageUpload.types";

const ImageUpload: React.FC<IImageUploadProps> = ({
  imageFile,
  setImageFile,
  borderRadius,
  ...props
}) => {
  return (
    <StyledImageUpload borderRadius={borderRadius} {...props}>
      <StyledImageUploadInner borderRadius={borderRadius}>
        <Image
          alt=""
          src={
            typeof imageFile === "string"
              ? imageFile || "/upload.png"
              : imageFile
              ? URL.createObjectURL(imageFile)
              : "/upload.png"
          }
          layout="fill"
          objectFit="cover"
        />
        <input
          onChange={(e) => {
            console.log(typeof imageFile);
            if (typeof imageFile === "string") {
              if (e.target.files && e.target.files[0].size / 1024 / 1024 < 2) {
                getBase64(e.target.files[0]).then(async (res) => {
                  setImageFile(res);
                });
              }
            } else {
              setImageFile(e.target.files?.length ? e.target.files[0] : null);
            }
          }}
          type="file"
          // onChange={handleUploadPhoto}
          // disabled={isPhotoUpdating}
          accept="image/x-png,image/gif,image/jpeg,image/jpg"
        />
      </StyledImageUploadInner>
    </StyledImageUpload>
  );
};

export default ImageUpload;
