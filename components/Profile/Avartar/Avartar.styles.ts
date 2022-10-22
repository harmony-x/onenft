import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const StyledAvartar = styled.button`
  width: 150px;
  height: 150px;
  border: 4px solid #ffffff;
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  border-radius: 50%;
  margin: 0;
  overflow: hidden;
  img {
    border-radius: 50%;
  }
  svg,
  .ant-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .ant-spin-dot-item {
    background-color: #ffffff;
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
  input {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    /* font-size: 100px; */
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
  }
`;
