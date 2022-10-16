import CSSTypes from "csstype";

export interface FlexProps {
  justifyContent?: CSSTypes.Property.JustifyContent;
  alignItems?: CSSTypes.Property.AlignItems;
  flexWrap?: CSSTypes.Property.FlexWrap;
  flexDir?: CSSTypes.Property.FlexDirection;
  width?: CSSTypes.Property.Width;
  maxWidth?: CSSTypes.Property.MaxWidth;
  height?: CSSTypes.Property.Height;
  maxHeight?: CSSTypes.Property.MaxHeight;
  bgColor?: CSSTypes.Property.BackgroundColor;
  gap?: CSSTypes.Property.Gap;
  margin?: CSSTypes.Property.Margin;
  padding?: CSSTypes.Property.Padding;
  grow?: CSSTypes.Property.FlexGrow;
}
