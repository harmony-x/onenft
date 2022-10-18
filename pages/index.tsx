import { Button } from "$components/App/Button/Button.styles";
import Category from "$components/Explore/Category/Category";
import Hero from "$components/Explore/Hero/Hero";
import HotCollections from "$components/Explore/HotCollections/HotCollections";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { HarmonyShards, Key } from "harmony-marketplace-sdk";
import type { NextPage } from "next";
import Head from "next/head";
import { useDisconnect } from "wagmi";

const Home: NextPage = () => {
  const key = new Key(HarmonyShards.SHARD_0);
  const { disconnect } = useDisconnect();
  // const signer = useSigner();
  // const o = useProvider();
  // const provider = signer.data ?? o;
  // const { address } = useAccount();
  // // const key = new HDKey(
  // const hrc20 = new HRC20(new Key(HarmonyShards.SHARD_0, provider));
  // const anysigner = signer.data!;

  // const key = new Key(window.ethereum!);

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
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </MainLayout>

      {/* <><ConnectButton /></> */}
    </div>
  );
};

export default Home;
