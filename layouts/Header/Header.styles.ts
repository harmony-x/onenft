import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { IStyledLinkProps } from "./Header.types";
import { Hamburger as HamburgerSVG } from "$svgs/hamburger";
import { LightMode as LightModeSVG } from "$svgs/light";

export const StyledHeader = styled(AntdLayout.Header)`
  background: transparent;
  padding: 19px 32px;
  height: max-content;
  border-bottom: 2.7px solid #2d2f43;
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;
  @media screen and (${BREAKPOINTS.md}) {
    padding: 32px;
  }
  @media screen and (${BREAKPOINTS.xl}) {
    padding: 32px 72px;
  }
`;

export const NavBig = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: none;
  height: max-content;
  @media screen and (${BREAKPOINTS.lg}) {
    display: flex;
  }
`;

export const NavSmall = styled(FlexibleDiv)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: max-content;
  @media screen and (${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const LogoBig = styled.a`
  position: relative;
  width: 13%;
  height: 43px;
  @media screen and (${BREAKPOINTS.lg}) {
    width: 10%;
  }
  @media screen and (${BREAKPOINTS.xl}) {
    width: 13%;
  }
`;

export const LogoSmall = styled.a`
  position: relative;
  width: 80px;
  height: 22px;
  @media screen and (${BREAKPOINTS.sm}) {
    width: 120px;
    height: 40px;
  }
`;

export const MenuBig = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  height: max-content;
  @media screen and (${BREAKPOINTS.lg}) {
    width: 30%;
  }
  @media screen and (${BREAKPOINTS.xl}) {
    width: 25%;
  }
`;

export const LightModeSmall = styled(LightModeSVG)`
  width: 23px;
  height: 23px;
  @media screen and (${BREAKPOINTS.sm}) {
    width: 35px;
    height: 35px;
  }
`;

export const HarmburgerSmall = styled(HamburgerSVG)`
  width: 23px;
  height: 23px;
  @media screen and (${BREAKPOINTS.sm}) {
    width: 35px;
    height: 35px;
  }
`;

export const InputContainer = styled.div`
  width: 13%;
  @media screen and (${BREAKPOINTS.lg}) {
    width: 30%;
  }
  @media screen and (${BREAKPOINTS.xl}) {
    width: 33%;
  }
`;

export const StyledLink = styled.a<IStyledLinkProps>`
  color: ${({ isActive }) =>
    isActive ? "rgba(5, 212, 182, 0.67)" : "rgba(255, 255, 255, 0.87)"};
  font-weight: ${({ weight }) => weight ?? "400"};
  font-size: 1.8rem;
  line-height: 2.3rem;
  transition: 0.3s ease-in-out;
  &:hover {
    color: rgba(5, 212, 182, 0.67);
  }
`;

export const Button = styled.div`
  width: 15%;
  width: 250px;
  text-align: center;
  /* @media screen and (${BREAKPOINTS.lg}) {
    width: 10%;
  }
  @media screen and (${BREAKPOINTS.xl}) {
    width: 15%;
  } */
`;
