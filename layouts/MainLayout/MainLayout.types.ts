import CSSTypes from "csstype";
import { ReactNode } from "react";

export interface IMainLayoutProps {
  activePage?: string;
  children: ReactNode;
  search?: string;
}

export interface IStyledLinkProps {
  weight: CSSTypes.Property.FontWeight;
}
