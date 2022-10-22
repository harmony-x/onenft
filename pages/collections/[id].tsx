import { Button } from "$components/App/Button/Button.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import CollectionView from "$components/Collection/CollectionView/CollectionView";
import ItemCard from "$components/Items/ItemCard/ItemCard";
import { ItemsTab } from "$components/Items/ItemsTab/ItemsTab.styles";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { getSingleCollectionNFTs } from "$utils/api";
import { Col, Row, Skeleton } from "antd";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";

interface CollectionProps {
  query: {
    id?: string;
  };
}

const Collection: NextPage<CollectionProps> = ({ query: { id = "" } }) => {
  const [showMore, setShowMore] = useState<number>(8);
  const { data, isLoading, isSuccess } = useQuery(
    ["singleCollectionNFTs", id],
    () => getSingleCollectionNFTs(id)
  );

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {isLoading || !data ? (
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          <>
            <CollectionView />
            <ItemsTab mb="86px">
              <ItemsTab.TabPane key="1" tab="Owned">
                <FlexibleDiv
                  gap="24px"
                  flexDir="column"
                  justifyContent="stretch"
                  alignItems="center"
                >
                  <Row gutter={{ md: 24, lg: 24 }}>
                    {data.items
                      .splice(0, showMore)
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
                            <ItemCard
                              id={contract_address}
                              tokenId={token_id}
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
                    onClick={() =>
                      setShowMore((prevShowMore) => prevShowMore + 4)
                    }
                  >
                    Load More
                  </Button>
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
          </>
        )}
      </MainLayout>
    </div>
  );
};

export default Collection;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};
