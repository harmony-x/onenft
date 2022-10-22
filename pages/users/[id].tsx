import { Button } from "$components/App/Button/Button.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import ItemCard from "$components/Items/ItemCard/ItemCard";
import { ItemsTab } from "$components/Items/ItemsTab/ItemsTab.styles";
import UserHero from "$components/Profile/UserHero/UserHero";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { getUserNFTs } from "$utils/api";
import { Col, Row } from "antd";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";

interface UserProps {
  query: {
    id?: string;
  };
}

const User: NextPage<UserProps> = ({ query: { id = "" } }) => {
  const { data: userNFTsData, isLoading: isLoadingUserNFTs } = useQuery(
    ["userNFTs", id],
    () => getUserNFTs(id)
  );
  const [showMore, setShowMore] = useState<number>(8);

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <UserHero id={id} />
        <ItemsTab mb="86px">
          <ItemsTab.TabPane key="1" tab="Owned">
            <FlexibleDiv
              gap="24px"
              flexDir="column"
              justifyContent="stretch"
              alignItems="stretch"
            >
              {isLoadingUserNFTs || !userNFTsData ? null : (
                <Row gutter={{ md: 24, lg: 24 }}>
                  {userNFTsData.items
                    .filter(({ type }) => type.toLowerCase() === "nft")
                    .map(({ contract_address, nft_data }, i) => (
                      <Link
                        key={i}
                        href={`/items/${contract_address}?token_id=${nft_data[0].token_id}`}
                      >
                        <Col
                          key={i}
                          xs={{ span: 24 }}
                          md={{ span: 12 }}
                          lg={{ span: 8 }}
                          xl={{ span: 6 }}
                        >
                          <ItemCard
                            id={contract_address}
                            tokenId={nft_data[0].token_id}
                          />
                        </Col>
                      </Link>
                    ))}
                </Row>
              )}
              {userNFTsData &&
              userNFTsData.items.filter(
                ({ type }) => type.toLowerCase() === "nft"
              ).length >= showMore ? (
                <FlexibleDiv margin="40px 0 0 0">
                  <Button
                    border="1px solid rgba(5, 212, 182, 0.67)"
                    bgColor="transparent"
                    bgImage="none"
                    mb="60px"
                    maxWidth="221px"
                    width="100%"
                    onClick={() =>
                      setShowMore((prevShowMore) => prevShowMore + 4)
                    }
                  >
                    Load More
                  </Button>
                </FlexibleDiv>
              ) : null}
            </FlexibleDiv>
          </ItemsTab.TabPane>
          <ItemsTab.TabPane key="2" tab="Listed">
            <Row gutter={{ md: 24, lg: 24 }}>
              {[1, 2, 3].map((item) => (
                <Col
                  key={item}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  {/* <ItemCard
                    creator="Khyati"
                    image="/primate.png"
                    name="Ecotheraphy Pips #345 NFT"
                    price={100}
                  /> */}
                </Col>
              ))}
            </Row>
          </ItemsTab.TabPane>
        </ItemsTab>
      </MainLayout>
      {/* <><ConnectButton /></> */}
    </div>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};
