import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import { Hamburger as HamburgerSVG } from "$svgs/hamburger";
import { LightMode as LightModeSVG } from "$svgs/light";
import { Layout as AntdLayout } from "antd";
import styled, { css } from "styled-components";
import { IStyledLinkProps } from "./MainLayout.types";

export const Layout = styled(AntdLayout)`
  background: transparent;
  min-height: 100vh;
`;

export const Content = styled(AntdLayout.Content)`
  background: transparent;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  @media screen and (${BREAKPOINTS.xl}) {
    padding: 0 72px;
  }
`;
