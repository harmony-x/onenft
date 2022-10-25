import { Button } from "$components/App/Button/Button.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import CollectionView from "$components/Collection/CollectionView/CollectionView";
import ItemCard from "$components/Items/ItemCard/ItemCard";
import { ItemsTab } from "$components/Items/ItemsTab/ItemsTab.styles";
import MainLayout from "$layouts/MainLayout/MainLayout";
import {
  getCollection,
  getCollectionMetaData,
  getSingleCollectionNFTs,
} from "$utils/api";
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
  const { data: collectionMetaData, isLoading: isLoadingCollectionMetaData } =
    useQuery(["collectionMetaData", id], () => getCollectionMetaData(id));
  const { data, isLoading, isSuccess } = useQuery(["collection", id], () =>
    getCollection({ address: id })
  );

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {isLoadingCollectionMetaData || !collectionMetaData ? (
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          <>
            <CollectionView collection={data} isLoading={isLoading} />
            <ItemsTab mb="86px">
              <ItemsTab.TabPane key="1" tab="Owned">
                <FlexibleDiv
                  gap="24px"
                  flexDir="column"
                  justifyContent="stretch"
                  alignItems="center"
                >
                  <Row gutter={{ md: 24, lg: 24 }}>
                    {collectionMetaData.tokens
                      .slice(0, showMore)
                      .map(({ data: tokenData, id: tokenId }, i) => (
                        <Link
                          key={id}
                          href={`/items/${id}?token_id=${tokenId}`}
                        >
                          <Col
                            xs={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 6 }}
                          >
                            <ItemCard
                              name={data?.name ?? ""}
                              id={id}
                              tokenId={tokenId}
                            />
                          </Col>
                        </Link>
                      ))}
                  </Row>
                  {collectionMetaData.tokens.length ? (
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
