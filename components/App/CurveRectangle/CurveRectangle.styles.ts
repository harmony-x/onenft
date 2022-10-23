import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledCurveRectangle = styled(FlexibleDiv)`
  background-color: #565976;
  opacity: 0.8;
  backdrop-filter: blur(5px);
  border-radius: 100px;
  width: 111px;
  min-height: 34px;
  position: relative;
  span {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #ffffff;
    @media screen and (${BREAKPOINTS.sm}) {
      font-size: 1.3rem;
      line-height: 1.6rem;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  @media screen and (${BREAKPOINTS.sm}) {
    width: 121px;
    min-height: 40px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 141px;
    min-height: 45px;
  }
`;
