import { SelectProps } from "antd";
import CSSTypes from "csstype";

export type ISelectProps = SelectProps & {
  mb?: CSSTypes.Property.MarginBottom;
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
};
