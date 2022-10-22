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
import Image from "next/image";
import {
  CollectionPrices,
  CollectionViewContainer,
  CollectionViewContent,
  CollectionViewImage,
  CollectionViewText,
} from "./CollectionView.styles";

const CollectionView = () => {
  return (
    <CollectionViewContainer>
      <CollectionViewImage>
        <Image src="/primate.png" alt="" layout="fill" />
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
          <HeadingTwo>Primates</HeadingTwo>
          <Verified />
        </FlexibleDiv>
        <FlexibleDiv gap="12px" justifyContent="flex-start">
          <div className="socials-svg">
            <Discord />
          </div>
          <div className="socials-svg">
            <Twitter />
          </div>
          <div className="socials-svg">
            <Telegram />
          </div>
        </FlexibleDiv>
        <CollectionViewText>
          Royality Fee <span>8%</span>
        </CollectionViewText>
        <CollectionViewText>
          Collection of 10,000 Primates facilitating a seamless adoption of the
          web3 space through community fueled ventures and collaborations.
        </CollectionViewText>
        <CollectionPrices flexWrap="wrap" justifyContent="flex-start">
          <FlexibleDiv
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
          </FlexibleDiv>
          <FlexibleDiv
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
          </FlexibleDiv>
          <FlexibleDiv
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
          </FlexibleDiv>
        </CollectionPrices>
      </CollectionViewContent>
    </CollectionViewContainer>
  );
};

export default CollectionView;
