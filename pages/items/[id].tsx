import { Button } from "$components/App/Button/Button.styles";
import { HeadingThree } from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import ItemCard from "$components/Items/ItemCard/ItemCard";
import ItemView from "$components/Items/ItemView/ItemView";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { Col, Row } from "antd";
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
        <HeadingThree mb="45px">More from this collection</HeadingThree>
        <FlexibleDiv gap="24px" flexDir="column">
          <Row gutter={{ md: 24, lg: 24 }}>
            {[1, 2, 3, 4].map((item) => (
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
          <Button
            border="1px solid rgba(5, 212, 182, 0.67)"
            bgColor="transparent"
            bgImage="none"
            mb="60px"
            maxWidth="221px"
            width="100%"
          >
            View Collection
          </Button>
        </FlexibleDiv>
      </MainLayout>
    </div>
  );
};

export default Home;
