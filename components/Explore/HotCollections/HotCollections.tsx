import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Ethereum } from "$svgs/ethereum";
import { Harmony } from "$svgs/harmony";
import { Verified } from "$svgs/verified";
import { hotCollections } from "$utils/data";
import { splitArrToChunks } from "$utils/functions";
import Image from "next/image";
import {
  HotCollectionsTab,
  StyledHotCollection,
  StyledHotCollectionFloorPrice,
  StyledHotCollectionFloorPriceSVG,
  StyledHotCollectionImage,
  StyledHotCollectionName,
  StyledHotCollectionNumbering,
  StyledHotCollections,
  StyledHotCollectionsContainer,
} from "./HotCollections.styles";

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
                {item.map(({ image, name, price, id }, i) => (
                  <StyledHotCollection key={i}>
                    <StyledHotCollectionNumbering>
                      {id}.
                    </StyledHotCollectionNumbering>
                    <StyledHotCollectionImage>
                      <Image
                        objectFit="cover"
                        layout="fill"
                        alt=""
                        src={"/primate.png"}
                      />
                      <Verified />
                    </StyledHotCollectionImage>
                    <div>
                      <StyledHotCollectionName>{name}</StyledHotCollectionName>
                      <StyledHotCollectionFloorPrice>
                        Floor price:{" "}
                        <StyledHotCollectionFloorPriceSVG>
                          <Harmony />
                        </StyledHotCollectionFloorPriceSVG>{" "}
                        {price}
                      </StyledHotCollectionFloorPrice>
                    </div>
                  </StyledHotCollection>
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
