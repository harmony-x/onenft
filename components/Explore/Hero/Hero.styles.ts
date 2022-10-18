import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 31px 0 42px 0;
  @media screen and (${BREAKPOINTS.sm}) {
    padding: 45px 0 60px 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 55px 0 100px 0;
  }
`;

export const HeroHeading = styled.h1`
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3rem;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  margin-bottom: 42px;
  span {
    font-weight: 500;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 3.6rem;
    line-height: 4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 4.8rem;
    line-height: 6.1rem;
  }
`;
