import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled, { css } from "styled-components";
import { Layout as AntdLayout } from "antd";

export const StyledFooter = styled(AntdLayout.Footer)`
  background: transparent;
  padding: 0;
`;

export const FooterMenu = css`
  border-top: 2.7px solid #2d2f43;
  border-bottom: 2.7px solid #2d2f43;
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 32px;
  @media screen and (${BREAKPOINTS.xl}) {
    padding: 50px 72px;
  }
`;

export const FooterTypography = css`
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin: 0;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.6rem;
    line-height: 2.3rem;
  }
  @media screen and (${BREAKPOINTS.md}) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

export const FooterMenuBig = styled.div`
  ${FooterMenu}
  justify-content: space-between;
  flex-wrap: wrap;
  display: none;
  @media screen and (${BREAKPOINTS.lg}) {
    display: flex;
  }
`;

export const FooterMenuSmall = styled.div`
  ${FooterMenu}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  @media screen and (${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const FooterLogo = styled.a`
  position: relative;
  width: 80px;
  height: 22px;
  @media screen and (${BREAKPOINTS.sm}) {
    width: 120px;
    height: 40px;
  }
  @media screen and (${BREAKPOINTS.md}) {
    width: 159px;
    height: 43px;
  }
`;

export const FooterMenuTagline = styled.h3`
  font-weight: 300;
  color: rgba(255, 255, 255, 0.67);
  span {
    font-weight: 400;
  }
  ${FooterTypography}
`;

export const FooterMenuHeading = styled.h4`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.87);
  ${FooterTypography}
`;

export const FooterMenuLink = styled.a`
  font-weight: 400;
  color: rgba(255, 255, 255, 0.67);
  ${FooterTypography}
`;

export const FooterSocialLinks = styled(FlexibleDiv)`
  svg {
    width: 20px;
    height: 20px;
    @media screen and (${BREAKPOINTS.lg}) {
      width: 27px;
      height: 28px;
    }
  }
`;

export const FooterCopyright = styled(FlexibleDiv)`
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 32px;
  @media screen and (${BREAKPOINTS.xl}) {
    padding: 32px 72px;
  }
  svg {
    width: 20px;
    height: 20px;
    @media screen and (${BREAKPOINTS.sm}) {
      width: 25px;
      height: 25px;
    }
  }
`;
