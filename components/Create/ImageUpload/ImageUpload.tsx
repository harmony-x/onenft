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
          src={imageFile ? URL.createObjectURL(imageFile) : "/upload.png"}
          layout="fill"
          objectFit="cover"
        />
        <input
          onChange={(e) => {
            setImageFile(e.target.files?.length ? e.target.files[0] : null);
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
