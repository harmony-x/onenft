import { StyledCurveRectangle } from "$components/App/CurveRectangle/CurveRectangle.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledCategoryContainer = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  @media screen and (${BREAKPOINTS.sm}) {
    margin-bottom: 53px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    margin-bottom: 73px;
  }
`;

export const Catgegory = styled.li`
  width: 100%;
  min-height: 184px;
  padding: 14px;
  background-color: #2d2f43;
  border-radius: 15px;
  margin-bottom: 18px;
  cursor: pointer;
  overflow: hidden;
  img {
    border-radius: 15px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  position: relative;
  @media screen and (${BREAKPOINTS.sm}) {
    min-height: 200px;
    padding: 18px;
    margin-bottom: 20px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    min-height: 258px;
    padding: 20px;
    margin-bottom: 26px;
  }
  ${StyledCurveRectangle} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    @media screen and (${BREAKPOINTS.lg}) {
      bottom: 45px;
    }
  }
`;

export const CatgegoryInner = styled.a`
  display: block;
  width: 100%;
  position: relative;
  min-height: 184px;
  overflow: hidden;
  @media screen and (${BREAKPOINTS.sm}) {
    min-height: 200px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    min-height: 258px;
  }
`;
