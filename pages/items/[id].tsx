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
  ItemFormInput,
  ItemFormSelect,
  ItemViewButton,
  ItemViewButtonSkeleton,
  ItemViewInput,
  ItemViewModalButton,
  ItemViewSelect,
  StyledItemViewContentText,
} from "$components/Items/ItemView/ItemView.styles";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Harmony } from "$svgs/harmony";
import {
  getCollection,
  getCollectionMetaData,
  getSingleCollectionNFTs,
  getSingleNFTMetaData,
  getSingleTokenMetaData,
  getUsers,
} from "$utils/api";
import { Col, Form, Row, Skeleton } from "antd";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { marketContract, nftContract } from "contract-factory";
import { useAccount, useProvider, useSigner } from "wagmi";
import { HRC721, Key } from "harmony-marketplace-sdk";
import { OwnableNft__factory } from "typechain-types";
import { HttpProvider, WSProvider } from "@harmony-js/network";
import { ethers } from "ethers";
import { MARKETPLACE_ADDRESS, tokens } from "$utils/data";
import toast from "$utils/toast";
import { USDT } from "$svgs/usdt";

interface ItemProps {
  query: {
    token_id?: string;
    id?: string;
  };
}

const Item: NextPage<ItemProps> = ({ query: { id = "", token_id = "" } }) => {
  const [buySellModal, setBuySellModal] = useState<boolean>(false);
  const [mode, setMode] = useState<"buy" | "sell" | null>(null);
  const [ownerName, setOwnerName] = useState<string>("");
  const [ownerAddress, setOwnerAddress] = useState<string>("");
  const [sellLoading, setSellLoading] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [deadline, setDeadline] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const { data: tokenMetaData, isLoading: isLoadingTokenData } = useQuery(
    ["tokenMetaData", id, token_id],
    () => getSingleTokenMetaData(id, token_id)
  );
  const { data: collectionsData, isLoading: isLoadingCollections } = useQuery(
    ["singleCollectionNFTs", id],
    () => getSingleCollectionNFTs(id)
  );
  const { data: collectionData, isLoading: isLoadingCollection } = useQuery(
    ["collection", id],
    () => getCollection({ address: id })
  );
  const { data: collectionMetaData, isLoading: isLoadingCollectionMetaData } =
    useQuery(["collectionMetaData", id], () => getCollectionMetaData(id));
  const { data: usersData, isLoading: isLoadingUsers } = useQuery(
    "users",
    getUsers
  );

  const { data: signer } = useSigner();
  const defaultProvider = useProvider();
  const provider = signer ?? defaultProvider;
  const { isDisconnected, address } = useAccount();
  // const key = new Key(new HttpProvider("https://api.s0.b.hmny.io"));
  // const contract = new HRC721(id, OwnableNft__factory.abi, key);
  // contract
  //   .ownerOf(token_id)
  //   .then((res) => console.log(res))
  //   .catch((e) => console.log(e));
  nftContract(id, provider)
    .ownerOf(token_id)
    .then((res) => {
      setOwnerName(
        usersData?.find(({ address = "" }) => address === res)?.name ?? ""
      );
      setOwnerAddress(
        usersData?.find(({ address = "" }) => address === res)?.address ?? ""
      );
    })
    .catch((e) => console.log(e));

  // @akindeji
  // You can manage the onClick logic else where if needed
  const onBuyClick = async () => {
    // remember to check if the user is connected
    if (isDisconnected) return;
    // remember to disable clicking on pressing the button, can enable it in finally block
    try {
      const tx = await marketContract(provider).buyNft(
        // put actual nft contract address
        id,
        // put actual nft id
        token_id
      );
      // wait for two confirmations
      await tx.wait(2);
      // refresh page or something, just make sure new owner shows and all
      toast("success", "Bought NFT successfully");
      setBuySellModal(false);
    } catch (error) {
      console.log(error);
      // handle error, a generic message showing item couldn't be bought works
    }
  };

  const router = useRouter();

  // @akindeji
  const onSellClick = async ({
    price,
    tokenAddress,
  }: {
    price: number;
    tokenAddress: string;
  }) => {
    // remember to check if the user is connected
    if (isDisconnected) return;
    // remember to disable clicking on pressing the button, can enable it in finally block
    setSellLoading(true);
    try {
      const contract = nftContract(id, provider);
      const r = await contract.getApproved(token_id);
      if (r !== MARKETPLACE_ADDRESS) {
        const tx = await contract.approve(MARKETPLACE_ADDRESS, token_id);
        await tx.wait(2);
      }
      console.log(r);
      const tx = await marketContract(provider).listNft(
        // put the actual nft contract address
        id,
        // put the actual nft id
        token_id,
        // put actual price (100 in this case), then use selected token decimals, although it's the same for the 2 tokens
        ethers.utils.parseEther(`${price}`),
        // put selected token address as currency
        tokenAddress,
        // put actual deadline timestamp
        parseInt((new Date(Date.now() + 12096e5).getTime() / 1000).toFixed(0))
      );
      // wait for two confirmations
      await tx.wait(2);
      // refresh page or something, just make sure new owner shows and all
      setSellLoading(false);
      console.log(tx);
      toast("success", "Listed NFT successfully");
      setBuySellModal(false);
    } catch (error) {
      setSellLoading(false);
      console.log(error);
      // handle error, a generic message showing item couldn't be bought works
    }
  };

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
      token_id
    );
    setPrice(nftInfo.price.div(ethers.utils.parseEther("1")).toNumber());
    setDeadline(nftInfo.deadline.toNumber());
    setCurrency(nftInfo.currency);
  };
  getNftInfo();

  useEffect(() => {
    if (ownerAddress && address) {
      ownerAddress === address && setMode("sell");
    } else if (
      parseInt((new Date(Date.now() + 12096e5).getTime() / 1000).toFixed(0)) >
      deadline
    ) {
      setMode("buy");
    }
  }, [ownerAddress, address, deadline]);

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {isLoadingTokenData || !tokenMetaData ? (
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          <>
            <ItemView
              id={id}
              tokenId={token_id}
              button={
                isLoadingUsers ? (
                  <ItemViewButtonSkeleton shape="square" />
                ) : mode ? (
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
                ) : null
              }
              creatorName={collectionData?.name ?? ""}
              description={tokenMetaData.data.description ?? ""}
              ownerName={ownerName}
              creatorImage={collectionData?.image ?? ""}
              itemName={tokenMetaData.data.name ?? ""}
              itemImage={tokenMetaData.data.image ?? ""}
              currency={currency}
              price={price}
            />
            <HeadingThree mb="45px">More from this collection</HeadingThree>
            {isLoadingCollectionMetaData || !collectionMetaData ? null : (
              <FlexibleDiv gap="24px" flexDir="column">
                <Row gutter={{ md: 24, lg: 24 }}>
                  {collectionMetaData.tokens
                    .slice(0, 4)
                    .map(({ data: tokenData, id: tokenId }, i) => (
                      <Link
                        key={tokenId}
                        href={`/items/${id}?token_id=${tokenId}`}
                      >
                        <Col
                          xs={{ span: 24 }}
                          md={{ span: 12 }}
                          lg={{ span: 8 }}
                          xl={{ span: 6 }}
                        >
                          <ItemCard
                            name={collectionData?.name ?? ""}
                            id={id}
                            tokenId={tokenId}
                          />
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
            <>
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
                  {/* <StyledItemViewContentText as="p">
                    Balance: 10,000 ONE
                  </StyledItemViewContentText> */}
                  {price ? (
                    <FlexibleDiv gap="6px" justifyContent="flex-start">
                      {tokens?.find(({ address }) => address === currency)
                        ?.name === "ONE" ? (
                        <Harmony width="17px" height="17px" className="small" />
                      ) : tokens?.find(({ address }) => address === currency)
                          ?.name === "USDT" ? (
                        <USDT width="17px" height="17px" className="small" />
                      ) : null}
                      <HeadingFour>{price}</HeadingFour>
                      {/* <StyledItemViewContentText as="p">
                      $20.56
                    </StyledItemViewContentText> */}
                    </FlexibleDiv>
                  ) : null}
                </FlexibleDiv>
              </FlexibleDiv>
              <ItemViewModalButton
                htmlType="submit"
                bgImage="linear-gradient(45deg, #00AEE9 6.89%, #0AF190 93.89%)"
                width="100%"
                onClick={onBuyClick}
              >
                Buy now
              </ItemViewModalButton>
            </>
          ) : (
            <Form
              // form={form}
              name="sell-nft"
              autoComplete="off"
              layout="vertical"
              requiredMark={false}
              onFinish={(values: { price: string; token: string }) => {
                console.log(values);
                onSellClick({
                  price: parseInt(values.price),
                  tokenAddress: values.token,
                });
              }}
            >
              <FlexibleDiv
                margin="0 0 50px 0"
                justifyContent="stretch"
                alignItems="stretch"
                flexDir="column"
                gap="20px"
              >
                {price ? (
                  <FlexibleDiv
                    margin="0 0 20px 0"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <StyledItemViewContentText>
                      Current Price
                    </StyledItemViewContentText>
                    <FlexibleDiv gap="6px" justifyContent="flex-start">
                      {tokens?.find(({ address }) => address === currency)
                        ?.name === "ONE" ? (
                        <Harmony width="17px" height="17px" className="small" />
                      ) : tokens?.find(({ address }) => address === currency)
                          ?.name === "USDT" ? (
                        <USDT width="17px" height="17px" className="small" />
                      ) : null}
                      <HeadingFour>{price ?? ""}</HeadingFour>
                      {/* <StyledItemViewContentText as="p">
                      $50.34
                    </StyledItemViewContentText> */}
                    </FlexibleDiv>
                  </FlexibleDiv>
                ) : null}
                <FlexibleDiv alignItems="center" justifyContent="space-between">
                  <StyledItemViewContentText>
                    Listing Price
                  </StyledItemViewContentText>
                  <FlexibleDiv>
                    <ItemFormSelect
                      name="token"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    >
                      <ItemViewSelect
                        options={tokens.map(({ name, address, svg }) => ({
                          label: svg,
                          value: address,
                        }))}
                      />
                    </ItemFormSelect>
                    <ItemFormInput
                      name="price"
                      rules={[
                        { required: true, message: "This field is required" },
                        {
                          required: true,
                          message: "Enter a number",
                          pattern: new RegExp(/^[0-9]+$/),
                        },
                      ]}
                    >
                      <ItemViewInput border="2px solid #3D405C" />
                    </ItemFormInput>
                  </FlexibleDiv>
                  {/* <FlexibleDiv gap="6px" justifyContent="flex-start">
                  <Harmony width="17px" height="17px" className="small" />
                  <HeadingFour>2751.36</HeadingFour>
                  <StyledItemViewContentText as="p">
                    $50.34
                  </StyledItemViewContentText>
                </FlexibleDiv> */}
                </FlexibleDiv>
              </FlexibleDiv>
              <ItemViewModalButton
                htmlType="submit"
                bgImage="linear-gradient(45deg, #E23B49 6.89%, #8084DC 93.89%)"
                width="100%"
                loading={sellLoading}
              >
                Sell Item
              </ItemViewModalButton>
            </Form>
          )}
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
