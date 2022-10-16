import React, { SVGProps } from "react";

export type BreakpointQuery = `min-width: ${number}px`;

export interface Breakpoints {
  sm: BreakpointQuery;
  md: BreakpointQuery;
  lg: BreakpointQuery;
  xl: BreakpointQuery;
  xxl: BreakpointQuery;
  xxxl: BreakpointQuery;
}

export interface Menu {
  name: string;
  link: string;
}

export interface Social {
  icon: JSX.Element;
  link: string;
}

export interface FooterLink {
  heading: string;
  menu: Menu[];
}
