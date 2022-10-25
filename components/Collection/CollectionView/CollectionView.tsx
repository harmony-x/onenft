import {
  HeadingThree,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Discord } from "$svgs/discord";
import { Harmony } from "$svgs/harmony";
import { Telegram } from "$svgs/telegram";
import { Twitter } from "$svgs/twitter";
import { Verified } from "$svgs/verified";
import { Website } from "$svgs/website";
import { getCollection } from "$utils/api";
import { Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useQuery } from "react-query";
import {
  CollectionPrices,
  CollectionViewContainer,
  CollectionViewContent,
  CollectionViewImage,
  CollectionViewText,
} from "./CollectionView.styles";
import { ICollectionviewProps } from "./CollectionView.types";

const CollectionView: FC<ICollectionviewProps> = ({
  collection,
  isLoading,
}) => {
  return (
    <CollectionViewContainer>
      {isLoading || !collection ? (
        <Skeleton active paragraph={{ rows: 10 }} />
      ) : (
        <>
          {" "}
          <CollectionViewImage>
            <Image
              src={collection?.image ?? "/default-avartar.png"}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </CollectionViewImage>
          <CollectionViewContent
            flexDir="column"
            gap="18px"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <FlexibleDiv
              alignItems="center"
              gap="10px  "
              justifyContent="flex-start"
            >
              <HeadingTwo>{collection?.name ?? ""}</HeadingTwo>
              <Verified />
            </FlexibleDiv>
            <FlexibleDiv gap="12px" justifyContent="flex-start">
              {collection?.discord ? (
                <Link href={collection.discord}>
                  <a target="_blank" className="socials-svg">
                    <Discord />
                  </a>
                </Link>
              ) : null}
              {collection?.twitter ? (
                <Link href={collection.twitter}>
                  <a target="_blank" className="socials-svg">
                    <Twitter />
                  </a>
                </Link>
              ) : null}
              {collection?.telegram ? (
                <Link href={collection.telegram}>
                  <a target="_blank" className="socials-svg">
                    <Telegram />
                  </a>
                </Link>
              ) : null}
              {collection?.website ? (
                <Link href={collection.website}>
                  <a target="_blank" className="socials-svg">
                    <Website />
                  </a>
                </Link>
              ) : null}
            </FlexibleDiv>
            <CollectionViewText>
              Royality Fee <span>{collection?.royalty ?? ""}%</span>
            </CollectionViewText>
            <CollectionViewText>
              {collection?.description ?? ""}
            </CollectionViewText>
            <CollectionPrices flexWrap="wrap" justifyContent="flex-start">
              {/* <FlexibleDiv
                gap="5px"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDir="column"
              >
                <CollectionViewText>Total volume</CollectionViewText>
                <FlexibleDiv alignItems="center">
                  <Harmony className="harmony-svg" />
                  <HeadingThree>1000</HeadingThree>
                </FlexibleDiv>
              </FlexibleDiv> */}
              {/* <FlexibleDiv
                gap="5px"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDir="column"
              >
                <CollectionViewText>Floor price</CollectionViewText>
                <FlexibleDiv alignItems="center">
                  <Harmony className="harmony-svg" />
                  <HeadingThree>20</HeadingThree>
                </FlexibleDiv>
              </FlexibleDiv> */}
              {/* <FlexibleDiv
                gap="5px"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDir="column"
              >
                <CollectionViewText>Owners</CollectionViewText>
                <HeadingThree>1256</HeadingThree>
              </FlexibleDiv>
              <FlexibleDiv
                gap="5px"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDir="column"
              >
                <CollectionViewText>Listed</CollectionViewText>
                <HeadingThree>10%</HeadingThree>
              </FlexibleDiv> */}
            </CollectionPrices>
          </CollectionViewContent>
        </>
      )}
    </CollectionViewContainer>
  );
};

export default CollectionView;
