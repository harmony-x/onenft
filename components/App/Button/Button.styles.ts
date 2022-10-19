import styled from "styled-components";
import { Button as AntdBtn } from "antd";
import { IButtonProps } from "./Button.types";
import { BREAKPOINTS } from "$constants/breakpoints";

export const Button = styled(AntdBtn)<IButtonProps>`
  height: ${({ height }) => height ?? "48px"};
  width: ${({ width }) => width ?? "auto"};
  max-width: ${({ maxWidth }) => maxWidth ?? "auto"};
  margin-bottom: ${({ mb }) => mb};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color ?? "#FFFFFF"};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImage }) =>
    bgImage ?? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"};
  border: ${({ border }) => border ?? "none"};
  padding: 12px 24px;
  border-radius: 40px;
  font-size: 1.2rem;
  line-height: 2rem;
  cursor: pointer;
  @media screen and (${BREAKPOINTS.sm}) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    font-size: 1.6rem;
    line-height: 2.3rem;
  }
  &:hover {
    color: ${({ color }) => color ?? "#FFFFFF"};
    background-color: transparent;
    background-image: ${({ bgImage }) =>
      bgImage ?? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"};
    border-radius: 10px;
    border: ${({ border }) => border ?? "none"};
  }
  &:focus {
    color: ${({ color }) => color ?? "#FFFFFF"};
    background-color: transparent;
    background-image: ${({ bgImage }) =>
      bgImage ?? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"};
    border: ${({ border }) => border ?? "none"};
  }
  svg {
    margin-right: 8px;
    width: 14px;
    height: 14px;
    @media screen and (${BREAKPOINTS.sm}) {
      width: 18px;
      height: 18px;
    }
  }
`;
