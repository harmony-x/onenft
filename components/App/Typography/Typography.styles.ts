import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { ITypographyProps } from "./Typography.types";

export const HeadingTwo = styled.h2<ITypographyProps>`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.87);
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 3rem;
    line-height: 3.4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 4.8rem;
    line-height: 6.1rem;
  }
`;
