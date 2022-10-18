import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledProfileHero = styled.section`
  padding: 31px 0 31px 0;
  @media screen and (${BREAKPOINTS.sm}) {
    padding: 60px 0 60px 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 93px 0 83px 0;
  }
`;

export const StyledProfileHeroContainer = styled(FlexibleDiv)`
  gap: 10px;
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 40px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 50px;
  }
`;
