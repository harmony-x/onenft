import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { IImageUploadProps } from "./ImageUpload.types";

export const StyledImageUpload = styled.div<
  Partial<
    Pick<
      IImageUploadProps,
      | "mb"
      | "borderRadius"
      | "height"
      | "imageFile"
      | "lgHeight"
      | "lgWidth"
      | "padding"
      | "width"
    >
  >
>`
  width: ${({ width }) => width ?? "440px"};
  height: ${({ height }) => height ?? "223px"};
  position: relative;
  padding: ${({ padding }) => padding ?? "22px"};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  margin: 0;
  border: 3px dashed #3d405c;
  border-radius: ${({ borderRadius }) => borderRadius ?? "15px"};
  @media screen and (${BREAKPOINTS.lg}) {
    width: ${({ lgWidth }) => lgWidth ?? "440px"};
    height: ${({ lgHeight }) => lgHeight ?? "223px"};
  }
  margin-bottom: ${({ mb }) => mb};
`;

export const StyledImageUploadInner = styled.div<
  Partial<Pick<IImageUploadProps, "borderRadius">>
>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #2d2f43;
  border-radius: ${({ borderRadius }) => borderRadius ?? "15px"};
  img {
    object-fit: cover;
    border-radius: ${({ borderRadius }) => borderRadius ?? "15px"};
  }
  input {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    /* font-size: 100px; */
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
  }
`;
