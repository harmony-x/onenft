import CSSTypes from "csstype";
import React from "react";

export interface IStyledItemViewContentTextProps {
  mb?: CSSTypes.Property.MarginBottom;
}

export interface IItemViewProps {
  button: React.ReactNode;
  creatorName: string;
  creatorImage: string;
  ownerName: string;
  description: string;
  itemName: string;
  itemImage: string;
  tokenId: string;
  id: string;
  price: number;
  currency: string;
}
