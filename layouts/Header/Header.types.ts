import CSSTypes from "csstype";

export interface IHeaderProps {
  activePage?: string;
  searchString?: string;
}

export interface IStyledLinkProps {
  weight: CSSTypes.Property.FontWeight;
  isActive: boolean;
}
