import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { ITypographyProps } from "./Typography.types";

export const HeadingTwo = styled.h2<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
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

export const HeadingThree = styled.h3<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.8rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.87);
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 2.6rem;
    line-height: 2.1rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 3.6rem;
    line-height: 4rem;
  }
`;

export const ParagraphOne = styled.h3<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.67)"};
  margin-bottom: ${({ mb }) => mb};
  word-break: break-all;
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 2.4rem;
    line-height: 2.1rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;

export const HeadingFour = styled.h4<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.6rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 0.87);
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 2.2rem;
    line-height: 2.4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2.8rem;
    line-height: 4.8rem;
  }
`;

export const HeadingFive = styled.h5<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.87)"};
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 2rem;
    line-height: 2.2rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;

export const HeadingSix = styled.h6<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.87)"};
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`;

export const ParagraphTwo = styled.p<ITypographyProps>`
  font-weight: ${({ weight }) => weight ?? "500"};
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${({ color }) => color ?? "rgba(255, 255, 255, 0.87)"};
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ textAlign }) => textAlign};
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`;
