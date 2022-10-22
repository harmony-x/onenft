import { Select as AntdSelect } from "antd";
import styled from "styled-components";
import { ISelectProps } from "./Select.types";

export const Select = styled(AntdSelect)<ISelectProps>`
  height: ${({ height }) => height ?? "44px"};
  width: ${({ width }) => width ?? "auto"};
  display: flex;
  align-items: center;
  margin-bottom: ${({ mb }) => mb};
  &:not(.ant-select-customize-input) .ant-select-selector {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 13px 14px;
    background-color: transparent;
    border: 1.5px solid #3d405c;
    border-radius: 10px;
  }

  &:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #3d405c;
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none;
    border-color: #3d405c;
  }

  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    color: rgba(255, 255, 255, 0.67);
    font-size: 1.8rem;
    line-height: 1.5rem !important;
  }
  .ant-select-selection-overflow {
    align-items: center;
    gap: 5px;
  }
  svg {
    fill: #e4e4e7;
  }
`;
