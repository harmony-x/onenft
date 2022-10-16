import styled from "styled-components";
import { FlexProps } from "./Box.types";

export const FlexibleDiv = styled("div")<FlexProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "wrap"};
  flex-direction: ${({ flexDir }) => flexDir ?? "row"};
  width: ${({ width }) => width ?? "auto"};
  max-width: ${({ maxWidth }) => maxWidth ?? "auto"};
  background: ${({ bgColor }) => bgColor ?? "transparent"};
  height: ${({ height, width }) =>
    height ? height : width ? width : "max-content"};
  max-height: ${({ maxHeight }) => maxHeight ?? "initial"};
  gap: ${({ gap }) => gap ?? "0px"};
  margin: ${({ margin }) => margin ?? "0px"};
  padding: ${({ padding }) => padding ?? "0px"};
  flex-grow: ${({ grow }) => grow};
`;
