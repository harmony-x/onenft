import { Button } from "$components/App/Button/Button.styles";
import CreatorDisplay from "$components/App/CreatorDisplay/CreatorDisplay";
import {
  HeadingFour,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Harmony } from "$svgs/harmony";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { marketContract } from "contract-factory";
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
  const { library, account, active } = useWeb3React<Web3Provider>();

  // @akindeji
  // You can manage the onClick logic else where if needed
  const onClick = async () => {
    // remember to check if the user is connected
    // remember to disable clicking on pressing the button, can enable it in finally block
    try {
      const tx = await marketContract(library).buyNft(
        // put actual nft address
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        // put actual nft id
        1
      );
      // wait for two confirmations
      await tx.wait(2);
      // refresh page or something, just make sure new owner shows and all
    } catch (error) {
      // handle error, a generic message showing item couldn't be bought works
    }
  };
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
        {/* Check other buy conditions here */}
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
