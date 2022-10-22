import { FlexibleDiv } from "$components/Box/Box.styles";
import { Menu as AntdMenu } from "antd";
import styled from "styled-components";

export const Menu = styled(AntdMenu)`
  width: 165px;
  padding: 15px 10px;
  background: #2d2f43;
  box-shadow: -2px -2px 5px 2px rgba(0, 0, 0, 0.05),
    2px 2px 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  li {
    &:hover {
      background: transparent;
    }
  }
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover,
  .ant-dropdown-menu-item.ant-dropdown-menu-item-active,
  .ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-active,
  .ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-active,
  .ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-active {
    background: transparent;
  }
`;

export const MenuLinkContainer = styled(FlexibleDiv)`
  span,
  svg,
  path {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    span {
      color: rgba(5, 212, 182, 0.67);
    }
    svg,
    path {
      fill: rgba(5, 212, 182, 0.67);
    }
  }
`;

export const MenuText = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.67);
  &:hover {
    color: rgba(5, 212, 182, 0.67);
    svg,
    path {
      fill: rgba(5, 212, 182, 0.67);
    }
  }
`;
