import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { HarmonyShards, Key, HRC20 } from "harmony-marketplace-sdk";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount, useProvider, useSigner } from "wagmi";

const Home: NextPage = () => {
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
      <><ConnectButton /></>
    </div>
  );
};

export default Home;
