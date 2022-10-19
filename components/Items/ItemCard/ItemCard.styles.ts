import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledItemCard = styled.li`
  width: 100%;
  background-color: #2d2f43;
  min-height: 373px;
  margin-bottom: 40px;
  cursor: pointer;
  img {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.5);
    }
  }
`;
export const StyledItemCardImage = styled.div`
  position: relative;
  width: 100%;
  height: 229px;
`;

export const StyledItemCardContent = styled.div`
  padding: 27px 40px 35px 20px;
`;

export const StyledItemCardDetails = styled(FlexibleDiv)`
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 12px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 16px;
  }
`;

export const StyledItemCardCreator = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.67);
  span {
    font-weight: 300;
    color: rgba(255, 255, 255, 0.57);
  }
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const StyledItemCardName = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.87);
  width: 67%;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`;

export const StyledItemCardPrice = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.87);
  svg {
    width: 8px;
    height: 8px;
  }
  .svg {
    border: 0.3px solid rgba(255, 255, 255, 0.67);
    border-radius: 50%;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    width: 18px;
    height: 18px;
  }
  .span {
    font-weight: 300;
    display: inline-block;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.67);
  }
  width: 19%;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;
