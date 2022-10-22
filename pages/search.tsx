import {
  ResultAvartar,
  ResultBox,
  ResultContainer,
  ResultDivider,
  ResultHeading,
  ResultItem,
} from "$components/Result/Result.styles";
import {
  HeadingFive,
  HeadingSix,
  ParagraphOne,
  ParagraphTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Verified } from "$svgs/verified";
import { getSingleCollectionNFTs, getSingleNFTMetaData } from "$utils/api";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

interface SearchProps {
  query: {
    token_id?: string;
    id?: string;
  };
}

const Search: NextPage<SearchProps> = ({
  query: { id = "", token_id = "" },
}) => {
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
  const router = useRouter();

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
            Search results for{" "}
            <ParagraphOne color="rgba(255, 255, 255, 0.87)" as="span">
              &quot;Degods&quot;
            </ParagraphOne>
          </ParagraphOne>
          <ResultBox>
            <ResultHeading>
              <HeadingFive weight="300">Collections</HeadingFive>
            </ResultHeading>
            <ResultItem as="a" justifyContent="flex-start" alignItems="center">
              <ResultAvartar>
                <Image src="/primate.png" layout="fill" alt="" />
              </ResultAvartar>
              <FlexibleDiv gap="8px" flexDir="column" alignItems="flex-start">
                <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                  Degods
                </HeadingFive>
                <ParagraphTwo as="p" weight="300">
                  9,456 items
                </ParagraphTwo>
              </FlexibleDiv>
            </ResultItem>
            <ResultDivider />
            <ResultItem as="a" justifyContent="flex-start" alignItems="center">
              <ResultAvartar>
                <Image src="/primate.png" layout="fill" alt="" />
              </ResultAvartar>
              <FlexibleDiv gap="8px" flexDir="column" alignItems="flex-start">
                <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                  Degods
                </HeadingFive>
                <ParagraphTwo as="p" weight="300">
                  9,456 items
                </ParagraphTwo>
              </FlexibleDiv>
            </ResultItem>
            <ResultDivider />
            <ResultItem as="a" justifyContent="flex-start" alignItems="center">
              <ResultAvartar>
                <Image src="/primate.png" layout="fill" alt="" />
              </ResultAvartar>
              <FlexibleDiv gap="8px" flexDir="column" alignItems="flex-start">
                <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                  Degods
                </HeadingFive>
                <ParagraphTwo as="p" weight="300">
                  9,456 items
                </ParagraphTwo>
              </FlexibleDiv>
            </ResultItem>
            <ResultHeading>
              <HeadingFive weight="300">Accounts</HeadingFive>
            </ResultHeading>
            <ResultItem as="a" justifyContent="flex-start" alignItems="center">
              <ResultAvartar>
                <Image src="/primate.png" layout="fill" alt="" />
                <Verified />
              </ResultAvartar>
              <FlexibleDiv gap="8px" flexDir="column" alignItems="flex-start">
                <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                  Degods
                </HeadingFive>
              </FlexibleDiv>
            </ResultItem>
            <ResultItem as="a" justifyContent="flex-start" alignItems="center">
              <ResultAvartar>
                <Image src="/primate.png" layout="fill" alt="" />
                <Verified />
              </ResultAvartar>
              <FlexibleDiv gap="8px" flexDir="column" alignItems="flex-start">
                <HeadingFive as="p" color="rgba(255, 255, 255, 0.87)">
                  Degoddess
                </HeadingFive>
              </FlexibleDiv>
            </ResultItem>
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
