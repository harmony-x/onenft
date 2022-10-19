import { ButtonProps } from "antd";
import CSSTypes from "csstype";

export type IButtonProps = ButtonProps & {
  mb?: CSSTypes.Property.MarginBottom;
  width?: CSSTypes.Property.Width;
  maxWidth?: CSSTypes.Property.MaxWidth;
  height?: CSSTypes.Property.Height;
  color?: CSSTypes.Property.Color;
  bgImage?: CSSTypes.Property.BackgroundImage;
  bgColor?: CSSTypes.Property.BackgroundColor;
  border?: CSSTypes.Property.Border;
};
