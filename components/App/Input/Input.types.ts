import { InputProps } from "antd";
import CSSTypes from "csstype";

export type IInputProps = InputProps & {
  mb?: CSSTypes.Property.MarginBottom;
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
  border?: CSSTypes.Property.Border;
  bgColor?: CSSTypes.Property.BackgroundColor;
};
