import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledCurveRectangle = styled(FlexibleDiv)`
  background-color: #565976;
  opacity: 0.6;
  backdrop-filter: blur(5px);
  border-radius: 100px;
  width: 111px;
  min-height: 34px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #ffffff;
  @media screen and (${BREAKPOINTS.sm}) {
    width: 121px;
    min-height: 40px;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 141px;
    min-height: 45px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;
