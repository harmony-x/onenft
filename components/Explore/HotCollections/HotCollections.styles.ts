import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import { Skeleton, Tabs } from "antd";
import styled from "styled-components";

export const StyledHotCollectionsContainer = styled.section`
  margin-bottom: 30px;
  @media screen and (${BREAKPOINTS.sm}) {
    margin-bottom: 53px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    margin-bottom: 73px;
  }
`;

export const HotCollectionsTab = styled(Tabs)`
  &.ant-tabs-top > .ant-tabs-nav::before,
  &.ant-tabs-bottom > .ant-tabs-nav::before,
  &.ant-tabs-top > div > .ant-tabs-nav::before,
  &.ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 0;
  }
  .ant-tabs-ink-bar {
    background: linear-gradient(45deg, #00aee9 6.89%, #0af190 93.89%);
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
    .svg {
      background-color: #ffffff;
    }
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
    .svg {
      background-color: #2d2f43;
      width: 23px;
      height: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 6px;
      border-radius: 50%;
      svg {
        width: 11px;
        height: 11px;
      }
      @media screen and (${BREAKPOINTS.sm}) {
        width: 25px;
        height: 25px;
        svg {
          width: 13px;
          height: 13px;
        }
      }
      @media screen and (${BREAKPOINTS.lg}) {
        width: 35px;
        height: 35px;
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  .ant-tabs-tab {
    padding: 5px 10px 5px 5px;
    @media screen and (${BREAKPOINTS.sm}) {
      padding: 8px 15px 8px 8px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      padding: 8px 25px 8px 10px;
    }
    & + .ant-tabs-tab {
      margin: 0 0 0 12px;
    }
  }
  &.ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
  &.ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    border: 1px solid #3d405c;
    border-radius: 40px;
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
`;

export const StyledHotCollections = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 14px;
  overflow-x: auto;
  ${FlexibleDiv} {
    gap: 12px;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    gap: 20px;
    ${FlexibleDiv} {
      gap: 12px;
    }
  }
  @media screen and (${BREAKPOINTS.lg}) {
    gap: 20px;

    ${FlexibleDiv} {
      gap: 26px;
    }
  }
`;

export const StyledHotCollection = styled.li`
  a {
    display: flex;
    gap: 11px;
    align-items: center;
    background-color: #2d2f43;
    width: 203px;
    height: 72px;
    border-radius: 10px;
    padding: 10px 11px;
    @media screen and (${BREAKPOINTS.sm}) {
      gap: 15px;
      width: 303px;
      height: 102px;
      border-radius: 13px;
      padding: 15px 14px;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      gap: 24px;
      width: 416px;
      height: 143px;
      border-radius: 15px;
      padding: 24px 20px;
    }
    img {
      transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`;

export const StyledHotCollectionNumbering = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.87);
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`;

export const StyledHotCollectionImage = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  svg {
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 14px;
    height: 14px;
  }
  img {
    border-radius: 50%;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    width: 60px;
    height: 60px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  @media screen and (${BREAKPOINTS.lg}) {
    width: 95px;
    height: 95px;
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const StyledHotCollectionFloorPrice = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3rem;
  color: rgba(255, 255, 255, 0.87);
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`;

export const StyledHotCollectionFloorPriceSVG = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  margin-right: 4px;
  border: 0.3px solid rgba(255, 255, 255, 0.67);
  border-radius: 50%;
  padding: 5px;
  width: 14px;
  height: 14px;
  svg {
    width: 6px;
    height: 6px;
  }
  @media screen and (${BREAKPOINTS.sm}) {
    width: 19px;
    height: 19px;
    svg {
      width: 9px;
      height: 9px;
    }
  }
`;
