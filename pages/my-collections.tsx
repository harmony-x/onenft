import { Input, TextArea } from "$components/App/Input/Input.styles";
import { Select } from "$components/App/Select/Select.styles";
import {
  HeadingFive,
  HeadingFour,
  HeadingSix,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import {
  CreateLayout,
  EmptyCollections,
  MyCollectionsAvartarSkeleton,
  MyCollectionsButton,
} from "$components/Create/CreateLayout/CreateLayout.styles";
import {
  StyledHotCollection,
  StyledHotCollectionFloorPrice,
  StyledHotCollectionFloorPriceSVG,
  StyledHotCollectionImage,
  StyledHotCollectionNumbering,
  StyledHotCollections,
} from "$components/Explore/HotCollections/HotCollections.styles";
import useAuthenticate from "$hooks/useAuthenticate";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Empty } from "$svgs/empty";
import { Harmony } from "$svgs/harmony";
import { Verified } from "$svgs/verified";
import { getProfile } from "$utils/api";
import { applyEllipsis } from "$utils/functions";
import { Col, Row } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

const MyCollections: NextPage = () => {
  const { data: getProfileData, isLoading: isLoadingGetProfile } = useQuery(
    ["userProfile"],
    () => getProfile()
  );

  const router = useRouter();

  useAuthenticate();

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CreateLayout>
          <HeadingTwo mb="20px">My Collections</HeadingTwo>
          <HeadingFive weight={"300"} mb="40px">
            Create, curate, and manage collections of unique NFTs to share and
            sell
          </HeadingFive>
          <MyCollectionsButton
            onClick={() => router.push("/create-collection")}
            height="60px"
          >
            Create a collection
          </MyCollectionsButton>
          {isLoadingGetProfile ? (
            <MyCollectionsAvartarSkeleton active shape="square" />
          ) : !getProfileData?.collections.length ? (
            <EmptyCollections>
              <FlexibleDiv flexDir="column" gap="26px">
                <Empty />
                <HeadingFive weight={"300"}>No collection yet</HeadingFive>
              </FlexibleDiv>
            </EmptyCollections>
          ) : (
            <StyledHotCollections>
              <FlexibleDiv alignItems="flex-start" justifyContent="flex-start">
                <Row gutter={{ md: 24, lg: 24 }}>
                  {getProfileData?.collections.map(
                    ({ name, image, address }, i) => (
                      <StyledHotCollection width="100%" key={i}>
                        <Link href={`collections/${address}`}>
                          <Col
                            xs={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 6 }}
                          >
                            <a>
                              <StyledHotCollectionNumbering>
                                {i + 1}.
                              </StyledHotCollectionNumbering>
                              <StyledHotCollectionImage>
                                <Image
                                  objectFit="cover"
                                  layout="fill"
                                  alt=""
                                  src={image ?? "/default-avartar.png"}
                                />
                                <Verified />
                              </StyledHotCollectionImage>
                              <div>
                                <HeadingFour mb="2px" as="p">
                                  {name ? applyEllipsis(name, 9) : ""}
                                </HeadingFour>
                              </div>
                            </a>
                          </Col>
                        </Link>
                      </StyledHotCollection>
                    )
                  )}
                </Row>
              </FlexibleDiv>
            </StyledHotCollections>
          )}
        </CreateLayout>
      </MainLayout>
    </div>
  );
};

export default MyCollections;
