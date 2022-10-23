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
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Collection, getCollections } from "$utils/api";
import { applyEllipsis } from "$utils/functions";

interface CategoriesProps {
  query: {
    categoryParam?: string;
  };
}

const Categories: NextPage<CategoriesProps> = ({
  query: { categoryParam = "" },
}) => {
  const [filteredCollections, setFilteredCollections] = useState<Collection[]>(
    []
  );
  const { data: collectionsData, isLoading: isLoadingCollections } = useQuery(
    "collections",
    getCollections
  );

  useEffect(() => {
    if (collectionsData)
      setFilteredCollections(
        collectionsData.filter(
          ({ category }) =>
            categoryParam && category?.toLowerCase()?.includes(categoryParam)
        )
      );
  }, [collectionsData, categoryParam]);

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ResultContainer>
          <ParagraphOne weight="300" textAlign="center" mb="30px" as="p">
            Collection results for category{" "}
            <ParagraphOne color="rgba(255, 255, 255, 0.87)" as="span">
              &quot;{categoryParam}&quot;
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
            ) : filteredCollections.length ? (
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
                            {name ?? "-"}
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
            ) : (
              <ResultItem justifyContent="flex-start" alignItems="center">
                <HeadingFive as="p">No collection(s) found</HeadingFive>
              </ResultItem>
            )}
          </ResultBox>
        </ResultContainer>
      </MainLayout>
    </div>
  );
};

export default Categories;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};
