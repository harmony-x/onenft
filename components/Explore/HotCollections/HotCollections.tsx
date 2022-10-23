import {
  HeadingFour,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Ethereum } from "$svgs/ethereum";
import { Harmony } from "$svgs/harmony";
import { Verified } from "$svgs/verified";
import { getCollection } from "$utils/api";
import { hotCollections } from "$utils/data";
import { applyEllipsis, splitArrToChunks } from "$utils/functions";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useQuery } from "react-query";
import {
  HotCollectionsTab,
  StyledHotCollection,
  StyledHotCollectionFloorPrice,
  StyledHotCollectionFloorPriceSVG,
  StyledHotCollectionImage,
  StyledHotCollectionNumbering,
  StyledHotCollections,
  StyledHotCollectionsContainer,
} from "./HotCollections.styles";

const HotCollection: FC<{ id: number; address: string }> = ({
  id,
  address,
}) => {
  const { data, isLoading, isSuccess } = useQuery(["collection", id], () =>
    getCollection({ address })
  );

  return (
    <StyledHotCollection>
      {isLoading ? null : (
        <Link href={`collections/${address}`}>
          <a>
            <StyledHotCollectionNumbering>{id}.</StyledHotCollectionNumbering>
            <StyledHotCollectionImage>
              <Image
                objectFit="cover"
                layout="fill"
                alt=""
                src={data?.image ?? "/default-avartar.png"}
              />
              <Verified />
            </StyledHotCollectionImage>
            <div>
              <HeadingFour mb="2px" as="p">
                {data?.name ? applyEllipsis(data?.name, 9) : ""}
              </HeadingFour>
              <StyledHotCollectionFloorPrice>
                Floor price:{" "}
                <StyledHotCollectionFloorPriceSVG>
                  <Harmony />
                </StyledHotCollectionFloorPriceSVG>{" "}
                100
              </StyledHotCollectionFloorPrice>
            </div>
          </a>
        </Link>
      )}
    </StyledHotCollection>
  );
};

const HotCollections = () => {
  const splitHotCollections = splitArrToChunks<typeof hotCollections[number]>(
    3,
    hotCollections
  );

  return (
    <StyledHotCollectionsContainer>
      <HeadingTwo mb="20px">Hot Collections 🔥</HeadingTwo>
      <HotCollectionsTab>
        <HotCollectionsTab.TabPane
          tab={
            <FlexibleDiv alignItems="center" justifyContent="flex-start">
              <div className="svg">
                <Harmony />
              </div>{" "}
              Harmony
            </FlexibleDiv>
          }
          key="1"
        >
          <StyledHotCollections>
            {splitHotCollections.map((item, i) => (
              <FlexibleDiv
                key={i}
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDir="column"
              >
                {item.map(({ id, address }, i) => (
                  <HotCollection id={id} address={address} key={i} />
                ))}
              </FlexibleDiv>
            ))}
          </StyledHotCollections>
        </HotCollectionsTab.TabPane>
        <HotCollectionsTab.TabPane
          tab={
            <FlexibleDiv alignItems="center" justifyContent="flex-start">
              <div className="svg">
                <Ethereum />
              </div>{" "}
              Ethereum
            </FlexibleDiv>
          }
          key="2"
        >
          {/* Content of Tab Pane 2 */}
        </HotCollectionsTab.TabPane>
        <HotCollectionsTab.TabPane tab="Show all" key="3">
          {/* Content of Tab Pane 3 */}
        </HotCollectionsTab.TabPane>
      </HotCollectionsTab>
    </StyledHotCollectionsContainer>
  );
};
export default HotCollections;
