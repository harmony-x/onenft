import { BREAKPOINTS } from "$constants/breakpoints";
import { Tabs, TabsProps } from "antd";
import styled from "styled-components";
import { IItemsTabProps } from "./ItemsTab.types";

export const ItemsTab = styled(Tabs)<IItemsTabProps & TabsProps>`
  &.ant-tabs-top > .ant-tabs-nav::before,
  &.ant-tabs-bottom > .ant-tabs-nav::before,
  &.ant-tabs-top > div > .ant-tabs-nav::before,
  &.ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 0;
  }
  .ant-tabs-ink-bar {
    background: #2d2f43;
    border-radius: 40px;
    height: 100%;
  }
  &.ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar,
  &.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-ink-bar,
  &.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar,
  &.ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-ink-bar {
    height: 100%;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff;
    z-index: 100;
  }
  .ant-tabs-tab-btn {
    color: rgba(255, 255, 255, 0.87);
    font-weight: 300;
    font-size: 1rem;
    @media screen and (${BREAKPOINTS.sm}) {
      font-size: 1.2rem;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      font-size: 1.4rem;
    }
  }
  .ant-tabs-tab {
    padding: 10px 20px;
    @media screen and (${BREAKPOINTS.sm}) {
      padding: 12px 30px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      padding: 14px 40px;
    }
    & + .ant-tabs-tab {
      margin: 0 0 0 12px;
    }
  }
  &.ant-tabs-top > .ant-tabs-nav,
  &.ant-tabs-bottom > .ant-tabs-nav,
  &.ant-tabs-top > div > .ant-tabs-nav,
  &.ant-tabs-bottom > div > .ant-tabs-nav {
    margin-bottom: 30px;
    @media screen and (${BREAKPOINTS.sm}) {
      margin-bottom: 40px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      margin-bottom: 50px;
    }
  }
  .ant-tabs-content {
    margin-bottom: ${({ mb }) => mb};
  }
`;
