import CSSTypes from "csstype";
import { ReactNode } from "react";

export interface IMainLayoutProps {
  activePage?: string;
  children: ReactNode;
}

export interface IStyledLinkProps {
  weight: CSSTypes.Property.FontWeight;
}
