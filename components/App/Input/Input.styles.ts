import { Input as AntdInput } from "antd";
import styled from "styled-components";
import { IInputProps } from "./Input.types";

export const Input = styled(AntdInput)<IInputProps>`
  min-height: ${({ height }) => height ?? "48px"};
  width: ${({ width }) => width ?? "auto"};
  border: 1px solid transparent;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.67);
  background-color: #2d2f43;
  padding: 15px 16px;
  font-size: 1.6rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  &::placeholder {
    color: rgba(255, 255, 255, 0.67);
  }
  & .ant-input-prefix {
    margin-right: 13px;
  }
  &:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: transparent;
  }
  &:focus,
  &.ant-input-affix-wrapper-focused {
    border-color: transparent;
    box-shadow: none;
  }
  .ant-input {
    color: rgba(255, 255, 255, 0.67);
    background-color: transparent;
  }
`;
