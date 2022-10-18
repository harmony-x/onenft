import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const CreatorDisplayContainer = styled(FlexibleDiv)`
  padding: 6px;
  max-width: 72px;
  min-height: 22px;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #ffffff;
  background-color: #404359;
  opacity: 0.8;
  backdrop-filter: blur(5px);
  border-radius: 100px;
  word-break: break-all;
  @media screen and (${BREAKPOINTS.sm}) {
    max-width: 157px;
    min-height: 48px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const CreatorDisplayImage = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  img {
    border-radius: 50%;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    width: 36px;
    height: 36px;
  }
`;
