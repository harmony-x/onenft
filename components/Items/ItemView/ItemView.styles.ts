import { Button } from "$components/App/Button/Button.styles";
import { Input } from "$components/App/Input/Input.styles";
import { Select } from "$components/App/Select/Select.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import { Form, Skeleton, Tabs } from "antd";
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
`;

export const StyledItemViewImage = styled.div`
  position: relative;
  height: 258px;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 30px;
  img {
    border-radius: 30px;
    object-fit: cover;
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
  .ant-tabs-tabpane {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: rgba(255, 255, 255, 0.67);
    @media screen and (${BREAKPOINTS.sm}) {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }
`;

export const StyledItemViewContentText = styled.p<IStyledItemViewContentTextProps>`
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.67);
  margin-bottom: ${({ mb }) => mb};
  &.owner {
    margin-bottom: 20px;
  }
  .span {
    color: rgba(255, 255, 255, 0.87);
  }
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.8rem;
    line-height: 2.8rem;
    &.owner {
      margin-bottom: 40px;
    }
  }
`;

export const ItemViewButton = styled(Button)`
  width: 100%;
  max-width: 185px;
`;

export const ItemViewModalButton = styled(Button)`
  height: 48px;
  @media screen and (${BREAKPOINTS.lg}) {
    height: 60px;
  }
`;

export const ItemViewPrice = styled(FlexibleDiv)`
  gap: 6px;
  margin-bottom: 20px;
  &.small {
    margin-bottom: 0;
  }
  svg {
    width: 16px;
    height: 16px;
    &.svg {
      width: 10px;
      height: 10px;
    }
    @media screen and (${BREAKPOINTS.md}) {
      width: 24px;
      height: 24px;
      &.small {
        width: 12px;
        height: 12px;
      }
    }
    @media screen and (${BREAKPOINTS.lg}) {
      width: 30px;
      height: 30px;
      &.small {
        width: 16px;
        height: 16px;
      }
    }
  }
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 8px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 12px;
    margin-bottom: 31px;
  }
`;

export const ItemViewInput = styled(Input)`
  height: 25px;
  padding: 10px 11px;
  /* width: 60%; */
  max-width: 300px;
  .ant-input-prefix {
    margin-right: 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    height: 30px;
  }
`;

export const ItemViewSelect = styled(Select)`
  /* width: 40%; */
  height: 25px;
  padding: 6px 7px;
  max-width: 200px;
  border: 0;
  border-radius: 0;
  &:not(.ant-select-customize-input) .ant-select-selector {
    height: 35px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    height: 48px;
    &:not(.ant-select-customize-input) .ant-select-selector {
      height: 48px;
    }
  }
`;

export const ItemFormSelect = styled(Form.Item)`
  width: 30%;
`;

export const ItemFormInput = styled(Form.Item)`
  width: 70%;
`;

export const ItemViewButtonSkeleton = styled(Skeleton.Avatar)`
  width: 100%;
  max-width: 185px;
  height: 40px;
  margin-bottom: 46px;
  .ant-skeleton-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;
