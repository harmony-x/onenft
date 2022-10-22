import CreatorDisplay from "$components/App/CreatorDisplay/CreatorDisplay";
import { FlexibleDiv } from "$components/Box/Box.styles";
import useWindowWidth from "$hooks/useWindowWidth";
import { ArrowLeft } from "$svgs/arrow-left";
import { ArrowRight } from "$svgs/arrow-right";
import { explore } from "$utils/data";
import { applyEllipsis } from "$utils/functions";
import Image from "next/image";
import { useCallback, useState } from "react";
import {
  CurrentBid,
  ExploreCardImage,
  ExploreCardInfo,
  ItemBid,
  ItemTitle,
  StyledExploreCard,
  StyledExploreSlider,
  StyledExploreSliderBtn,
  StyledExploreSliderInner,
  StyledExploreSliderOuter,
} from "./ExploreSlider.styles";

const ExploreSlider = () => {
  const [outerSliderWidth, setOuterSliderWidth] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const windowWidth = useWindowWidth();

  const onStyledExploreSliderOuterRefChange = useCallback(
    (node: HTMLDivElement | null) => {
      if (node === null) {
        // DOM node referenced by ref has been unmounted
      } else {
        window.addEventListener("resize", () =>
          setOuterSliderWidth(node.clientWidth)
        );
        setOuterSliderWidth(node.clientWidth);
        // DOM node referenced by ref has changed and exists
      }
    },
    []
  );

  return (
    <StyledExploreSlider>
      <StyledExploreSliderOuter ref={onStyledExploreSliderOuterRefChange}>
        <StyledExploreSliderBtn
          disabled={currentSlide <= 0}
          onClick={() =>
            setCurrentSlide((prevCurrentSlide) =>
              prevCurrentSlide <= 0 ? prevCurrentSlide : prevCurrentSlide - 1
            )
          }
          position="left"
        >
          <ArrowLeft />
        </StyledExploreSliderBtn>
        <StyledExploreSliderBtn
          disabled={
            windowWidth <= 992
              ? currentSlide >= explore.length - 1
              : currentSlide >= explore.length - 2
          }
          onClick={() =>
            setCurrentSlide((prevCurrentSlide) =>
              prevCurrentSlide >= explore.length - 1 ? 0 : prevCurrentSlide + 1
            )
          }
          position="right"
        >
          <ArrowRight />
        </StyledExploreSliderBtn>
        {outerSliderWidth ? (
          <StyledExploreSliderInner
            transform={
              (windowWidth <= 992
                ? outerSliderWidth
                : outerSliderWidth / 2 + 24) * currentSlide
            }
            width={`${outerSliderWidth * 6}px`}
          >
            {explore.map(
              (
                {
                  creatorImage,
                  creatorName,
                  currentBid,
                  itemImage,
                  itemTitle,
                  time,
                },
                i
              ) => (
                <StyledExploreCard
                  key={i}
                  width={`${
                    windowWidth <= 992
                      ? outerSliderWidth
                      : outerSliderWidth / 2 - 24
                  }px`}
                >
                  <ExploreCardImage>
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt=""
                      src={itemImage}
                    />
                  </ExploreCardImage>
                  <ExploreCardInfo>
                    <CreatorDisplay
                      name={
                        creatorName.length < 20
                          ? creatorName
                          : applyEllipsis(creatorName, 6)
                      }
                      img={creatorImage}
                    />
                    <ItemTitle>{itemTitle}</ItemTitle>
                    <FlexibleDiv
                      flexDir="column"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <CurrentBid>Current Bid</CurrentBid>
                      <ItemBid>{currentBid} ONE</ItemBid>
                    </FlexibleDiv>
                  </ExploreCardInfo>
                </StyledExploreCard>
              )
            )}
          </StyledExploreSliderInner>
        ) : (
          <StyledExploreSliderInner transform={0} width="100%" />
        )}
      </StyledExploreSliderOuter>
    </StyledExploreSlider>
  );
};

export default ExploreSlider;
