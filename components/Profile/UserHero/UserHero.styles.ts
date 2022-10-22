import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledUserHero = styled.section`
  padding: 31px 0 31px 0;
  @media screen and (${BREAKPOINTS.sm}) {
    padding: 60px 0 60px 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 93px 0 83px 0;
  }
`;

export const StyledUserHeroContainer = styled(FlexibleDiv)`
  gap: 10px;
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 40px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 50px;
  }
`;

export const StyledUserAvartar = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid #ffffff;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
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
