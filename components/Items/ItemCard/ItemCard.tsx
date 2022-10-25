import { FlexibleDiv } from "$components/Box/Box.styles";
import { Harmony } from "$svgs/harmony";
import { FC, useState } from "react";
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
import { getSingleNFTMetaData, getSingleTokenMetaData } from "$utils/api";
import { Image, Skeleton } from "antd";
import { marketContract } from "contract-factory";
import { useProvider, useSigner } from "wagmi";
import { ethers } from "ethers";
import { tokens } from "$utils/data";
import { USDT } from "$svgs/usdt";

const ItemCard: FC<IItemCardProps> = ({ id, tokenId, name }) => {
  const [price, setPrice] = useState<number>(0);
  const [deadline, setDeadline] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");

  const { data, isLoading, isSuccess } = useQuery(
    ["tokenMetaData", id, tokenId],
    () => getSingleTokenMetaData(id, tokenId)
  );

  const { data: signer } = useSigner();
  const defaultProvider = useProvider();
  const provider = signer ?? defaultProvider;

  // @akindeji
  const getNftInfo = async () => {
    // no need to check a connected account here, just get the nft info
    // you can use this anywhere you need to fetch nft info, maybe make it a utility or something
    // checkout the type of data returned from this
    // owner and currency are addresses, price and deadline are numbers
    const nftInfo = await marketContract(provider).nftInfos(
      // put actual nft contract address
      id,
      // put actual nft id
      tokenId
    );
    setPrice(nftInfo.price.div(ethers.utils.parseEther("1")).toNumber());
    setDeadline(nftInfo.deadline.toNumber());
    setCurrency(nftInfo.currency);
  };
  getNftInfo();

  return (
    <StyledItemCard>
      {isLoading || !data ? (
        <StyledItemCardImageSkeleton active shape="square" />
      ) : (
        <StyledItemCardImage>
          <Image
            src={
              data.data.image
                ? encodeURI(
                    data.data.image.replace(
                      "ipfs://",
                      "https://nftstorage.link/ipfs/"
                    )
                  )
                : ""
            }
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
            <span>By</span> {name ?? ""}
          </StyledItemCardCreator>
          <StyledItemCardDetails>
            <StyledItemCardName>{data.data.name ?? ""}</StyledItemCardName>
            {price ? (
              <StyledItemCardPrice>
                <span className="span">Price:</span> <br />
                <FlexibleDiv
                  justifyContent="flex-start"
                  flexWrap="nowrap"
                  alignItems="center"
                >
                  <span className="svg">
                    {tokens?.find(({ address }) => address === currency)
                      ?.name === "ONE" ? (
                      <Harmony />
                    ) : tokens?.find(({ address }) => address === currency)
                        ?.name === "USDT" ? (
                      <USDT />
                    ) : null}
                  </span>
                  {price}
                </FlexibleDiv>
              </StyledItemCardPrice>
            ) : null}
          </StyledItemCardDetails>
        </StyledItemCardContent>
      )}
    </StyledItemCard>
  );
};

export default ItemCard;
