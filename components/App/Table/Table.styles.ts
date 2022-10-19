import { BREAKPOINTS } from "$constants/breakpoints";
import { Table as AntdTable } from "antd";
import styled from "styled-components";

export const Table = styled(AntdTable)`
  width: 100%;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);

  .ant-table table {
    border: 2px solid #2d2f43;
    border-radius: 0;
    background: #242636;
    max-height: 237px;
    overflow-y: auto;
    display: block;
  }

  .ant-table-thead > tr > th {
    color: #231f20;
    padding: 12px 0 12px 40px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 300;
    background: #242636;
    border-bottom: 1px solid #2d2f43;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    @media screen and (${BREAKPOINTS.sm}) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    &::before {
      content: none !important;
    }
  }

  .ant-table-tbody {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.57);
    @media screen and (${BREAKPOINTS.sm}) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
    @media screen and (${BREAKPOINTS.lg}) {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    & > tr:hover > td {
      background: #242636;
    }

    & > tr:not(:last-child) > td {
      border-bottom: 1px solid #2d2f43;
    }

    & > tr > td {
      padding: 11px 0 11px 40px;
      border: none;
    }
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: #282828;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border: 1px solid #e4e7ec;
    border-radius: 6px;
  }

  .actions {
    width: 68px;
  }

  .ant-pagination-prev,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next,
  .ant-pagination-item {
    margin-right: 0px;
  }

  .ant-table-pagination.ant-pagination {
    display: none;
  }

  .ant-pagination-item {
    a {
      height: 100%;
    }

    &:hover a {
      color: #353535;
    }
  }

  .ant-pagination-item-active {
    background: rgba(35, 31, 32, 0.08);

    & a {
      color: #1d2939;
    }
  }
  .ant-table-column-sorter {
    display: none;
  }
`;
