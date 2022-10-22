import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const CollectionViewContainer = styled(FlexibleDiv)`
  padding: 31px 0 31px 0;
  @media screen and (${BREAKPOINTS.sm}) {
    padding: 60px 0 60px 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 93px 0 83px 0;
  }
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 40px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 50px;
    flex-direction: row;
    align-items: center;
  }
  .socials-svg {
    width: 30px;
    height: 30px;
    svg {
      width: 17px;
      height: 17px;
    }
    border: 1px solid #3d405c;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .harmony-svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    @media screen and (${BREAKPOINTS.sm}) {
      width: 20px;
      height: 20px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
`;

export const CollectionViewText = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.67);
  span {
    font-weight: 400;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`;

export const CollectionViewImage = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid #ffffff;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  border-radius: 50%;
  margin: 0;
  img {
    border-radius: 50%;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    width: 186px;
    height: 186px;
    border: 6px solid #ffffff;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 208px;
    height: 208px;
    border: 8px solid #ffffff;
  }
`;

export const CollectionViewContent = styled(FlexibleDiv)`
  width: 100%;
  @media screen and (${BREAKPOINTS.lg}) {
    width: 50%;
  }
`;

export const CollectionPrices = styled(FlexibleDiv)`
  gap: 10px;
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 20px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 30px;
  }
`;
