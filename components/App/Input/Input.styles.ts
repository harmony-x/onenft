import { Input as AntdInput } from "antd";
import styled from "styled-components";
import { IInputProps } from "./Input.types";

export const Input = styled(AntdInput)<IInputProps>`
  min-height: ${({ height }) => height ?? "48px"};
  width: ${({ width }) => width ?? "auto"};
  margin-bottom: ${({ mb }) => mb};
  background-color: ${({ bgColor }) => bgColor ?? "#2d2f43"};
  border: ${({ border }) => border ?? "1px solid transparent"};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.67);
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
    border: ${({ border }) => border ?? "1px solid transparent"};
  }
  &:focus,
  &.ant-input-affix-wrapper-focused {
    border: ${({ border }) => border ?? "1px solid transparent"};
    box-shadow: none;
  }
  .ant-input {
    color: rgba(255, 255, 255, 0.67);
    background-color: transparent;
  }
  &:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
  &:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
  &:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    background-color: #2d2f43;
  }
`;

export const TextArea = styled(AntdInput.TextArea)<IInputProps>`
  min-height: ${({ height }) => height ?? "221px"};
  width: ${({ width }) => width ?? "auto"};
  border: ${({ border }) => border ?? "1px solid transparent"};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.67);
  background-color: ${({ bgColor }) => bgColor ?? "#2d2f43"};
  padding: 15px 16px;
  font-size: 1.6rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: ${({ mb }) => mb};
  &::placeholder {
    color: rgba(255, 255, 255, 0.67);
  }
  & .ant-input-prefix {
    margin-right: 13px;
  }
  &:not(.ant-input-affix-wrapper-disabled):hover {
    border: ${({ border }) => border ?? "1px solid transparent"};
  }
  &:focus,
  &.ant-input-affix-wrapper-focused {
    border: ${({ border }) => border ?? "1px solid transparent"};
    box-shadow: none;
  }
  &.ant-input {
    color: rgba(255, 255, 255, 0.67);
    background-color: transparent;
    height: ${({ height }) => height ?? "221px"};
  }
  &:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  &:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
  &:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
  &:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    background-color: transparent;
  }
`;
