import { FC } from "react";
import { StyledCurveRectangle } from "./CurveRectangle.styles";
import { ICurveRectangleProps } from "./CurveRectangle.types";

const CurveRectangle: FC<ICurveRectangleProps> = ({ text }) => (
  <StyledCurveRectangle as="p" alignItems="center" justifyContent="center">
    <span>{text}</span>
  </StyledCurveRectangle>
);

export default CurveRectangle;
