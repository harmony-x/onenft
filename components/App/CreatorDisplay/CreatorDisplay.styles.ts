import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { ICreatorDisplayProps } from "./CreatorDisplay.types";

export const CreatorDisplayContainer = styled(FlexibleDiv)<
  Pick<ICreatorDisplayProps, "mb">
>`
  padding: 6px 20px 6px 6px;
  width: fit-content;
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
  margin-bottom: ${({ mb }) => mb};
  @media screen and (${BREAKPOINTS.sm}) {
    width: fit-content;
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
