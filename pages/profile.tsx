import ItemCard from "$components/Items/ItemCard/ItemCard";
import { ItemsTab } from "$components/Items/ItemsTab/ItemsTab.styles";
import ProfileHero from "$components/Profile/ProfileHero/ProfileHero";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Col, Row } from "antd";
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
        <ItemsTab mb="86px">
          <ItemsTab.TabPane key="1" tab="Owned">
            <Row gutter={{ md: 24, lg: 24 }}>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <Col
                  key={item}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <ItemCard
                    creator="Khyati"
                    image="/primate.png"
                    name="Ecotheraphy Pips #345 NFT"
                    price={100}
                  />
                </Col>
              ))}
            </Row>
          </ItemsTab.TabPane>
          <ItemsTab.TabPane key="2" tab="Listed">
            <Row gutter={{ md: 24, lg: 24 }}>
              {[1, 2, 3].map((item) => (
                <Col
                  key={item}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                >
                  <ItemCard
                    creator="Khyati"
                    image="/primate.png"
                    name="Ecotheraphy Pips #345 NFT"
                    price={100}
                  />
                </Col>
              ))}
            </Row>
          </ItemsTab.TabPane>
        </ItemsTab>
      </MainLayout>
      {/* <><ConnectButton /></> */}
    </div>
  );
};

export default Profile;
