import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const ResultContainer = styled.section`
  padding: 55px 0 86px 0;
`;

export const ResultBox = styled.div`
  border: 2.7px solid #2d2f43;
  border-radius: 0 0 15px 15px;
  max-height: 800px;
  overflow-y: auto;
`;

export const ResultHeading = styled.div`
  width: 100%;
  background-color: #292b3d;
  padding: 14px 0 14px 21px;
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 28px 0 28px 81px;
  }
`;

export const ResultItem = styled(FlexibleDiv)`
  padding: 20px 0 20px 21px;
  gap: 24px;
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 30px 0 30px 81px;
  }
`;

export const ResultDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #33364c;
`;

export const ResultAvartar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  background-color: #242636;
  overflow: hidden;
  img {
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
  svg {
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 14px;
    height: 14px;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 95px;
    height: 95px;
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;
