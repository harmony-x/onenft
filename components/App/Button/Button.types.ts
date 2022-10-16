import { ButtonProps } from "antd";
import CSSTypes from "csstype";

export type IButtonProps = ButtonProps & {
  mb?: CSSTypes.Property.MarginBottom;
  width?: CSSTypes.Property.Width;
  height?: CSSTypes.Property.Height;
  color?: CSSTypes.Property.Color;
  bgImage?: CSSTypes.Property.BackgroundImage;
};
