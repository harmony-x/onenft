import Category from "$components/Explore/Category/Category";
import Hero from "$components/Explore/Hero/Hero";
import HotCollections from "$components/Explore/HotCollections/HotCollections";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { HarmonyShards, Key } from "harmony-marketplace-sdk";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const key = new Key(HarmonyShards.SHARD_0);
  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Hero />
        <HotCollections />
        <Category />
      </MainLayout>
      {/* <><ConnectButton /></> */}
    </div>
  );
};

export default Home;
