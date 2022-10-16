import { InputProps } from "antd";
import CSSTypes from "csstype";

export type IInputProps = InputProps & {
  mb?: CSSTypes.Property.MarginBottom;
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
};
