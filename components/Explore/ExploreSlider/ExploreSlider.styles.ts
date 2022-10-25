import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import {
  IStyledExploreSliderBtnProps,
  IStyledExploreSliderInnerProps,
} from "./ExploreSlider.types";

export const StyledExploreSlider = styled.div`
  width: 100%;
  min-height: 182px;
  @media screen and (${BREAKPOINTS.sm}) {
    min-height: 348px;
  }
  position: relative;
`;

export const StyledExploreSliderOuter = styled.div`
  width: 100%;
  min-height: 182px;
  @media screen and (${BREAKPOINTS.sm}) {
    min-height: 348px;
  }
  overflow: hidden;
`;

export const StyledExploreSliderInner = styled.div<IStyledExploreSliderInnerProps>`
  min-height: 182px;
  @media screen and (${BREAKPOINTS.sm}) {
    min-height: 348px;
  }
  transition: transform 0.3s ease;
  display: flex;
  flex-wrap: nowrap;
  width: ${({ width }) => width};
  transform: ${({ transform }) => `translateX(-${transform}px)`};
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 48px;
  }
`;

export const StyledExploreSliderBtn = styled.button<IStyledExploreSliderBtnProps>`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #4b4e68;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${({ position }) => position === "left" && "0"};
  right: ${({ position }) => position === "right" && "0"};
  top: 50%;
  transform: translate(-50%, -50%);
  transform: ${({ position }) =>
    `translate(${position === "left" ? "-50%" : "50%"}, -50%)`};
  z-index: 10;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  svg {
    width: 8px;
    height: 14px;
  }
  @media screen and (${BREAKPOINTS.md}) {
    width: 48px;
    height: 48px;
    svg {
      width: 10px;
      height: 20px;
    }
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 68px;
    height: 68px;
    svg {
      width: 16px;
      height: 29px;
    }
  }
`;

export const StyledExploreCard = styled.div<
  Pick<IStyledExploreSliderInnerProps, "width">
>`
  display: flex;
  gap: 14px;
  min-height: 182px;
  @media screen and (${BREAKPOINTS.sm}) {
    min-height: 348px;
    gap: 32px;
  }
  background-color: #2d2f43;
  border-radius: 20px;
  padding: 19px 24px;
  width: ${({ width }) => width};
`;

export const ExploreCardImage = styled.div`
  position: relative;
  width: 45%;
  min-height: 182px;
  @media screen and (${BREAKPOINTS.sm}) {
    width: 50%;
    min-height: 348px;
    gap: 30px;
  }
  img {
    border-radius: 15px;
    object-fit: cover;
  }
`;

export const ExploreCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0;
  justify-content: space-between;
`;

export const ItemTitle = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: #ffffff;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 3.6rem;
    line-height: 3rem;
  }
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 4.2rem;
    line-height: 4.8rem;
  }
`;

export const CurrentBid = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3rem;
  color: rgba(255, 255, 255, 0.67);
  margin-bottom: 2px;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`;

export const ItemBid = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #ffffff;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 2.6rem;
    line-height: 3rem;
  }
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;
