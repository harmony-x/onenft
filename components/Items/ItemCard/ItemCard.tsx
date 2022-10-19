import { FlexibleDiv } from "$components/Box/Box.styles";
import { Harmony } from "$svgs/harmony";
import Image from "next/image";
import { FC } from "react";
import {
  StyledItemCard,
  StyledItemCardContent,
  StyledItemCardCreator,
  StyledItemCardDetails,
  StyledItemCardImage,
  StyledItemCardName,
  StyledItemCardPrice,
} from "./ItemCard.styles";
import { IItemCardProps } from "./ItemCard.types";

const ItemCard: FC<IItemCardProps> = ({ creator, image, name, price }) => {
  return (
    <StyledItemCard>
      <StyledItemCardImage>
        <Image objectFit="cover" src={image} alt="" layout="fill" />
      </StyledItemCardImage>
      <StyledItemCardContent>
        <StyledItemCardCreator>
          <span>By</span> {creator}
        </StyledItemCardCreator>
        <StyledItemCardDetails>
          <StyledItemCardName>{name}</StyledItemCardName>
          <StyledItemCardPrice>
            <span className="span">Price:</span> <br />
            <FlexibleDiv
              justifyContent="flex-start"
              flexWrap="nowrap"
              alignItems="center"
            >
              <span className="svg">
                <Harmony />
              </span>
              {price}
            </FlexibleDiv>
          </StyledItemCardPrice>
        </StyledItemCardDetails>
      </StyledItemCardContent>
    </StyledItemCard>
  );
};

export default ItemCard;
