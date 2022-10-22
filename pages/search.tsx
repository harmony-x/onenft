import {
  ResultAvartar,
  ResultAvartarSkeleton,
  ResultBox,
  ResultContainer,
  ResultDivider,
  ResultHeading,
  ResultItem,
  ResultItemSkeleton,
} from "$components/Result/Result.styles";
import {
  HeadingFive,
  ParagraphOne,
  ParagraphTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Verified } from "$svgs/verified";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Collection, getCollections, getUsers, UserResponse } from "$utils/api";
import { applyEllipsis } from "$utils/functions";

interface SearchProps {
  query: {
    search?: string;
  };
}

const Search: NextPage<SearchProps> = ({ query: { search = "" } }) => {
  const [filteredUsers, setFilteredUsers] = useState<UserResponse[]>([]);
  const [filteredCollections, setFilteredCollections] = useState<Collection[]>(
    []
  );
  const { data: usersData, isLoading: isLoadingUsers } = useQuery(
    "users",
    getUsers
  );
  const { data: collectionsData, isLoading: isLoadingCollections } = useQuery(
    "users",
    getCollections
  );

  useEffect(() => {
    if (usersData)
      setFilteredUsers(
        usersData.filter(({ name = "" }) =>
          name?.toLowerCase()?.includes(search)
        )
      );
  }, [usersData, search]);

  useEffect(() => {
    if (collectionsData)
      setFilteredCollections(
        collectionsData.filter(({ name = "" }) =>
          name?.toLowerCase()?.includes(search)
        )
      );
  }, [collectionsData, search]);

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout search={search}>
        <ResultContainer>
          <ParagraphOne weight="300" textAlign="center" mb="30px" as="p">
            Search results for{" "}
            <ParagraphOne color="rgba(255, 255, 255, 0.87)" as="span">
              &quot;{search}&quot;
            </ParagraphOne>
          </ParagraphOne>
          <ResultBox>
            <ResultHeading>
              <HeadingFive weight="300">Collections</HeadingFive>
            </ResultHeading>
            {isLoadingCollections ? (
              <ResultItem
                gap="2px"
                justifyContent="flex-start"
                alignItems="center"
              >
                <ResultAvartarSkeleton active />
                <ResultItemSkeleton active shape="square" />
              </ResultItem>
            ) : (
              filteredCollections.map(
                ({ address, name, description, image }, i) => (
                  <div key={address}>
                    <Link href={`collections/${address}`}>
                      <ResultItem
                        as="a"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <ResultAvartar>
                          <Image
                            src={image ?? "/default-profile.jpeg"}
                            layout="fill"
                            alt=""
                          />
                        </ResultAvartar>
                        <FlexibleDiv
                          gap="8px"
                          flexDir="column"
                          alignItems="flex-start"
                        >
                          <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                            {name}
                          </HeadingFive>
                          <ParagraphTwo as="p" weight="300">
                            {applyEllipsis(description, 30)}
                          </ParagraphTwo>
                        </FlexibleDiv>
                      </ResultItem>
                    </Link>
                    {i >= filteredCollections.length - 1 ? null : (
                      <ResultDivider />
                    )}
                  </div>
                )
              )
            )}
            <ResultHeading>
              <HeadingFive weight="300">Accounts</HeadingFive>
            </ResultHeading>
            {isLoadingUsers ? (
              <ResultItem
                gap="2px"
                justifyContent="flex-start"
                alignItems="center"
              >
                <ResultAvartarSkeleton active />
                <ResultItemSkeleton active shape="square" />
              </ResultItem>
            ) : (
              filteredUsers.map(({ address, name, profile_picture }, i) => (
                <div key={address}>
                  <Link href={`users/${address}`}>
                    <ResultItem
                      as="a"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <ResultAvartar>
                        <Image
                          src={profile_picture ?? "/default-profile.jpeg"}
                          layout="fill"
                          alt=""
                        />
                        <Verified />
                      </ResultAvartar>
                      <FlexibleDiv
                        gap="8px"
                        flexDir="column"
                        alignItems="flex-start"
                      >
                        <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                          {name}
                        </HeadingFive>
                      </FlexibleDiv>
                    </ResultItem>
                  </Link>
                  {i >= filteredUsers.length - 1 ? null : <ResultDivider />}
                </div>
              ))
            )}
          </ResultBox>
        </ResultContainer>
      </MainLayout>
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};
