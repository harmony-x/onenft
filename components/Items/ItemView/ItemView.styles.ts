import { Button } from "$components/App/Button/Button.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import { Tabs } from "antd";
import styled from "styled-components";
import { IStyledItemViewContentTextProps } from "./ItemView.types";

export const StyledItemView = styled(FlexibleDiv)`
  padding: 31px 0 31px 0;
  @media screen and (${BREAKPOINTS.sm}) {
    padding: 60px 0 60px 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 93px 0 83px 0;
  }
  flex-direction: column;
  @media screen and (${BREAKPOINTS.lg}) {
    flex-direction: row;
  }
  svg {
    width: 18px;
    height: 18px;
    @media screen and (${BREAKPOINTS.md}) {
      width: 24px;
      height: 24px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      width: 38px;
      height: 38px;
    }
  }
`;

export const StyledItemViewImage = styled.div`
  position: relative;
  height: 258px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 30px;
  img {
    border-radius: 30px;
  }
  @media screen and (${BREAKPOINTS.md}) {
    width: 46%;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 36%;
    height: 548px;
  }
`;

export const StyledItemViewContent = styled.div`
  width: 100%;
  @media screen and (${BREAKPOINTS.md}) {
    width: 50%;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 60%;
  }
`;

export const ItemViewTab = styled(Tabs)`
  &.ant-tabs-top > .ant-tabs-nav::before,
  &.ant-tabs-bottom > .ant-tabs-nav::before,
  &.ant-tabs-top > div > .ant-tabs-nav::before,
  &.ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 3px solid #2d2f43;
    border-radius: 4px;
  }
  .ant-tabs-ink-bar {
    background: rgba(227, 227, 229, 0.67);
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: rgba(255, 255, 255, 0.87);
  }
  .ant-tabs-tab-btn {
    color: rgba(255, 255, 255, 0.67);
    font-weight: 500;
    font-size: 1.4rem;
    @media screen and (${BREAKPOINTS.sm}) {
      font-size: 1.6rem;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      font-size: 1.8rem;
    }
  }
  .ant-tabs-tab {
    padding: 6px;
    & + .ant-tabs-tab {
      margin: 0 0 0 32px;
    }
  }
  &.ant-tabs-top > .ant-tabs-nav,
  &.ant-tabs-bottom > .ant-tabs-nav,
  &.ant-tabs-top > div > .ant-tabs-nav,
  &.ant-tabs-bottom > div > .ant-tabs-nav {
    margin-bottom: 16px;
    @media screen and (${BREAKPOINTS.sm}) {
      margin-bottom: 30px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledItemViewContentText = styled.p<IStyledItemViewContentTextProps>`
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.67);
  margin-bottom: ${({ mb }) => mb};
  .span {
    color: rgba(255, 255, 255, 0.87);
  }
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`;

export const ItemViewButton = styled(Button)`
  width: 100%;
  max-width: 185px;
`;
