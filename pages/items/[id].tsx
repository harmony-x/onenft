import { Button } from "$components/App/Button/Button.styles";
import { Input } from "$components/App/Input/Input.styles";
import Modal from "$components/App/Modal/Modal";
import { Select } from "$components/App/Select/Select.styles";
import {
  HeadingFour,
  HeadingThree,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import ItemCard from "$components/Items/ItemCard/ItemCard";
import ItemView from "$components/Items/ItemView/ItemView";
import {
  ItemViewButton,
  ItemViewInput,
  ItemViewModalButton,
  ItemViewSelect,
  StyledItemViewContentText,
} from "$components/Items/ItemView/ItemView.styles";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Harmony } from "$svgs/harmony";
import { getSingleCollectionNFTs, getSingleNFTMetaData } from "$utils/api";
import { Col, Row, Skeleton } from "antd";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { marketContract } from "contract-factory";

interface ItemProps {
  query: {
    token_id?: string;
    id?: string;
  };
}

const Item: NextPage<ItemProps> = ({ query: { id = "", token_id = "" } }) => {
  const [buySellModal, setBuySellModal] = useState<boolean>(false);
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const {
    data: NFTData,
    isLoading: isLoadingNFT,
    isSuccess: NFTSuccss,
  } = useQuery(["nftMetaData", id, token_id], () =>
    getSingleNFTMetaData(id, token_id)
  );
  const { data: collectionsData, isLoading: isLoadingCollections } = useQuery(
    ["singleCollectionNFTs", id],
    () => getSingleCollectionNFTs(id)
  );
  const { library, account, active } = useWeb3React<Web3Provider>();

  // @akindeji
  // You can manage the onClick logic else where if needed
  const onBuyClick = async () => {
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
      console.log(error);
      // handle error, a generic message showing item couldn't be bought works
    }
  };

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {isLoadingNFT || !NFTData ? (
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          <>
            <ItemView
              id={id}
              tokenId={token_id}
              button={
                <ItemViewButton
                  bgImage={
                    mode === "buy"
                      ? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"
                      : "linear-gradient(45deg, #E23B49 6.89%, #8084DC 93.89%)"
                  }
                  mb="46px"
                  onClick={() => setBuySellModal(true)}
                >
                  {mode === "buy" ? "Buy now" : "Sell Item"}
                </ItemViewButton>
              }
              creatorName={NFTData.items[0].contract_name}
              description={
                NFTData.items[0].nft_data[0]?.external_data?.description ?? ""
              }
              ownerName={NFTData.items[0].nft_data[0]?.owner_address ?? ""}
              itemName={NFTData.items[0].nft_data[0]?.external_data.name ?? ""}
              itemImage={
                NFTData.items[0].nft_data[0]?.external_data.image ?? ""
              }
            />
            <HeadingThree mb="45px">More from this collection</HeadingThree>
            {isLoadingCollections || !collectionsData ? null : (
              <FlexibleDiv gap="24px" flexDir="column">
                <Row gutter={{ md: 24, lg: 24 }}>
                  {collectionsData.items
                    .slice(0, 4)
                    .map(({ contract_address, token_id }) => (
                      <Link
                        key={token_id}
                        href={`/items/${contract_address}?token_id=${token_id}`}
                      >
                        <Col
                          xs={{ span: 24 }}
                          md={{ span: 12 }}
                          lg={{ span: 8 }}
                          xl={{ span: 6 }}
                        >
                          <ItemCard id={contract_address} tokenId={token_id} />
                        </Col>
                      </Link>
                    ))}
                </Row>
                <Button
                  border="1px solid rgba(5, 212, 182, 0.67)"
                  bgColor="transparent"
                  bgImage="none"
                  mb="60px"
                  maxWidth="221px"
                  width="100%"
                  onClick={() => router.push(`/collections/${id}`)}
                >
                  View Collection
                </Button>
              </FlexibleDiv>
            )}
          </>
        )}
        <Modal
          heading={mode === "buy" ? "Buy item" : "List item for sell"}
          modalOpen={buySellModal}
          setModalOpen={setBuySellModal}
        >
          {mode === "buy" ? (
            <FlexibleDiv
              margin="0 0 50px 0"
              alignItems="center"
              justifyContent="space-between"
            >
              <StyledItemViewContentText>Price</StyledItemViewContentText>
              <FlexibleDiv
                gap="6px"
                flexDir="column"
                justifyContent="space-between"
              >
                <StyledItemViewContentText as="p">
                  Balance: 10,000 ONE
                </StyledItemViewContentText>
                <FlexibleDiv gap="6px" justifyContent="flex-start">
                  <Harmony width="17px" height="17px" className="small" />
                  <HeadingFour>145</HeadingFour>
                  <StyledItemViewContentText as="p">
                    $20.56
                  </StyledItemViewContentText>
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
          ) : (
            <FlexibleDiv
              margin="0 0 50px 0"
              justifyContent="stretch"
              alignItems="stretch"
              flexDir="column"
              gap="20px"
            >
              <FlexibleDiv
                margin="0 0 20px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <StyledItemViewContentText>
                  Current Price
                </StyledItemViewContentText>
                <FlexibleDiv gap="6px" justifyContent="flex-start">
                  <Harmony width="17px" height="17px" className="small" />
                  <HeadingFour>2751.36</HeadingFour>
                  <StyledItemViewContentText as="p">
                    $50.34
                  </StyledItemViewContentText>
                </FlexibleDiv>
              </FlexibleDiv>
              <FlexibleDiv alignItems="center" justifyContent="space-between">
                <StyledItemViewContentText>
                  Listing Price
                </StyledItemViewContentText>
                <ItemViewInput
                  border="2px solid #3D405C"
                  value="10,000"
                  prefix={
                    <ItemViewSelect
                      height="15px"
                      options={[{ value: "ONE", label: "ONE" }]}
                    />
                  }
                />
                {/* <FlexibleDiv gap="6px" justifyContent="flex-start">
                  <Harmony width="17px" height="17px" className="small" />
                  <HeadingFour>2751.36</HeadingFour>
                  <StyledItemViewContentText as="p">
                    $50.34
                  </StyledItemViewContentText>
                </FlexibleDiv> */}
              </FlexibleDiv>
            </FlexibleDiv>
          )}
          <ItemViewModalButton
            bgImage={
              mode === "buy"
                ? "linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"
                : "linear-gradient(45deg, #E23B49 6.89%, #8084DC 93.89%)"
            }
            width="100%"
            onClick={mode === "buy" ? onBuyClick : () => console.log("sell")}
          >
            {mode === "buy" ? "Buy now" : "Sell Item"}
          </ItemViewModalButton>
        </Modal>
      </MainLayout>
    </div>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};
