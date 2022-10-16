import styled from "styled-components";
import { Button as AntdBtn } from "antd";
import { IButtonProps } from "./Button.types";

export const Button = styled(AntdBtn)<IButtonProps>`
  height: ${({ height }) => height ?? "48px"};
  width: ${({ width }) => width ?? "auto"};
  margin-bottom: ${({ mb }) => mb};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color ?? "#FFFFFF"};
  background-image: ${({ bgImage }) =>
    bgImage ?? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"};
  border: none;
  padding: "12px 24px";
  border-radius: 40px;
  font-size: 1.6rem;
  line-height: 2.3rem;
  cursor: pointer;
  &:hover {
    color: ${({ color }) => color ?? "#FFFFFF"};
    background-image: ${({ bgImage }) =>
      bgImage ?? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"};
    border-radius: 10px;
  }
  &:focus {
    color: ${({ color }) => color ?? "#FFFFFF"};
    background-image: ${({ bgImage }) =>
      bgImage ?? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"};
  }
`;
