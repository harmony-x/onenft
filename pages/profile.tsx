import ProfileHero from "$components/Profile/ProfileHero/ProfileHero";
import MainLayout from "$layouts/MainLayout/MainLayout";
import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ProfileHero />
      </MainLayout>
      {/* <><ConnectButton /></> */}
    </div>
  );
};

export default Profile;
