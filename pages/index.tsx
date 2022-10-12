import { ConnectButton } from "@rainbow-me/rainbowkit";
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
      <><ConnectButton /></>
    </div>
  );
};

export default Home;
