import { Button } from "$components/App/Button/Button.styles";
import CreatorDisplay from "$components/App/CreatorDisplay/CreatorDisplay";
import {
  HeadingFour,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Harmony } from "$svgs/harmony";
import Image from "next/image";
import {
  ItemViewButton,
  ItemViewTab,
  StyledItemView,
  StyledItemViewContent,
  StyledItemViewContentText,
  StyledItemViewImage,
} from "./ItemView.styles";

const ItemView = () => {
  return (
    <StyledItemView
      as="section"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <StyledItemViewImage>
        <Image src="/primate.png" objectFit="cover" alt="" layout="fill" />
      </StyledItemViewImage>
      <StyledItemViewContent>
        <CreatorDisplay mb="14px" name="PrimatesXX" img="/primate.png" />
        <HeadingTwo mb="6px" as="h3">
          Primate #2679
        </HeadingTwo>
        <StyledItemViewContentText mb="48px">
          Owned by <span className="span">DzaLiv</span>
        </StyledItemViewContentText>
        <StyledItemViewContentText mb="15px">
          Current price
        </StyledItemViewContentText>
        <FlexibleDiv justifyContent="flex-start" margin="0 0 31px 0" gap="12px">
          <Harmony />
          <HeadingFour>145</HeadingFour>
          <StyledItemViewContentText as="sub">$20.56</StyledItemViewContentText>
        </FlexibleDiv>
        <ItemViewButton mb="46px">Buy now</ItemViewButton>
        <ItemViewTab>
          <ItemViewTab.TabPane
            key="1"
            tab="About Creator"
          ></ItemViewTab.TabPane>
          <ItemViewTab.TabPane
            key="2"
            tab="Item Activity"
          ></ItemViewTab.TabPane>
        </ItemViewTab>
      </StyledItemViewContent>
    </StyledItemView>
  );
};

export default ItemView;
