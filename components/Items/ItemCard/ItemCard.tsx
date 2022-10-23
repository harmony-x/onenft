import { FlexibleDiv } from "$components/Box/Box.styles";
import { Harmony } from "$svgs/harmony";
import { FC } from "react";
import {
  StyledItemCard,
  StyledItemCardContent,
  StyledItemCardContentSkeleton,
  StyledItemCardCreator,
  StyledItemCardDetails,
  StyledItemCardImage,
  StyledItemCardName,
  StyledItemCardPrice,
  StyledItemCardImageSkeleton,
} from "./ItemCard.styles";
import { IItemCardProps } from "./ItemCard.types";
import { useQuery } from "react-query";
import { getSingleNFTMetaData } from "$utils/api";
import { Image, Skeleton } from "antd";

const ItemCard: FC<IItemCardProps> = ({ id, tokenId }) => {
  const { data, isLoading, isSuccess } = useQuery(
    ["nftMetaData", id, tokenId],
    () => getSingleNFTMetaData(id, tokenId)
  );

  return (
    <StyledItemCard>
      {isLoading || !data ? (
        <StyledItemCardImageSkeleton active shape="square" />
      ) : (
        <StyledItemCardImage>
          <Image
            src={data.items[0].nft_data[0]?.external_data?.image ?? "" ?? ""}
            alt=""
            // layout="fill"
            width="100%"
            height="100%"
            placeholder={
              <Image
                alt=""
                preview={false}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
                width="100%"
                height="100%"
              />
            }
            preview={false}
            // placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
            // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
          />
        </StyledItemCardImage>
      )}
      {isLoading || !data ? (
        <StyledItemCardContentSkeleton paragraph={{ rows: 1 }} />
      ) : (
        <StyledItemCardContent>
          <StyledItemCardCreator>
            <span>By</span> {data.items[0].contract_name ?? ""}
          </StyledItemCardCreator>
          <StyledItemCardDetails>
            <StyledItemCardName>
              {data.items[0].nft_data[0]?.external_data?.name ?? ""}
            </StyledItemCardName>
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
                50
              </FlexibleDiv>
            </StyledItemCardPrice>
          </StyledItemCardDetails>
        </StyledItemCardContent>
      )}
    </StyledItemCard>
  );
};

export default ItemCard;
