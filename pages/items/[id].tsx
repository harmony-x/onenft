import ItemView from "$components/Items/ItemView/ItemView";
import MainLayout from "$layouts/MainLayout/MainLayout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ItemView />
      </MainLayout>
    </div>
  );
};

export default Home;
