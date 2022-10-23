import CSSTypes from "csstype";
import { Dispatch, SetStateAction } from "react";

export interface IImageUploadProps {
  mb?: CSSTypes.Property.MarginBottom;
  imageFile: string | File | null;
  setImageFile: Dispatch<SetStateAction<string | File | null>>;
  width?: CSSTypes.Property.Width;
  lgWidth?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
  lgHeight?: CSSTypes.Property.Height;
  borderRadius?: CSSTypes.Property.BorderRadius;
  padding?: CSSTypes.Property.Padding;
}
