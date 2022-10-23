import { Input, TextArea } from "$components/App/Input/Input.styles";
import { Select } from "$components/App/Select/Select.styles";
import {
  HeadingFive,
  HeadingSix,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import {
  CreateItemButton,
  CreateLayout,
} from "$components/Create/CreateLayout/CreateLayout.styles";
import ImageUpload from "$components/Create/ImageUpload/ImageUpload";
import MainLayout from "$layouts/MainLayout/MainLayout";
import { DiscordTwo } from "$svgs/discord-2";
import { TelegramTwo } from "$svgs/telegram-2";
import { TwitterTwo } from "$svgs/twitter-2";
import { Website } from "$svgs/website";
import { Col, Row } from "antd";
import { deployNftContract } from "contract-factory";
import type { NextPage } from "next";
import Head from "next/head";
import { NFTStorage, File } from "nft.storage";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";

const CreateCollection: NextPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const { data: signer } = useSigner();
  const { isDisconnected } = useAccount();

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CreateLayout>
          <HeadingTwo mb="53px">Create a Collection</HeadingTwo>
          <Row gutter={{ xs: 24, lg: 32 }}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <HeadingFive mb="24px">Logo Image</HeadingFive>
              <HeadingSix
                mb="32px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                This image will also be used for navigation.
              </HeadingSix>
              <ImageUpload
                lgWidth="184px"
                lgHeight="184px"
                width="130px"
                height="130px"
                borderRadius="50%"
                padding="16px"
                imageFile={imageFile}
                setImageFile={setImageFile}
                mb="32px"
              />
              <HeadingFive mb="24px">Category</HeadingFive>
              <HeadingSix
                mb="32px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                Adding a category will help make your item more discoverable
              </HeadingSix>
              <Select
                width="208px"
                height="40px"
                placeholder="Select Category"
                options={[
                  { value: "Virtual Worlds", label: "Virtual Worlds" },
                  { value: "Trading Card", label: "Trading Card" },
                  { value: "Music NFTs", label: "Music NFTs" },
                  { value: "Art", label: "Art" },
                  { value: "Photography", label: "Photography" },
                  { value: "Collectibles", label: "Collectibles" },
                ]}
                mb="32px"
              />
              <HeadingFive mb="24px">Royalties</HeadingFive>
              <HeadingSix
                mb="18px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                Set the percentage of the sale price every time one of your
                items is sold
              </HeadingSix>
              <Input
                prefix={<HeadingSix>%</HeadingSix>}
                placeholder="Enter royalties"
                width="100%"
                border="1.5px solid #3d405c"
                mb="32px"
                bgColor="transparent"
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <HeadingFive mb="24px">Collection Name</HeadingFive>
              <Input
                placeholder="Example: Lord of the Rings"
                width="100%"
                border="1.5px solid #3D405C"
                bgColor="transparent"
                mb="32px"
              />
              <HeadingFive mb="24px">Description</HeadingFive>
              <TextArea
                placeholder="Provide a detailed description for your collection"
                width="100%"
                border="1.5px solid #3D405C"
                maxLength={300}
                mb="32px"
              />
              <HeadingFive mb="24px">Social Links</HeadingFive>
              <HeadingSix
                mb="32px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                Add your website, discord, telegram & Twitter links
              </HeadingSix>
              <Input
                prefix={<Website />}
                placeholder="https://yourwebsite.com"
                width="100%"
                border="1.5px solid #3d405c"
                mb="14px"
                bgColor="transparent"
              />
              <Input
                prefix={<DiscordTwo />}
                placeholder="https://discord.gg/name"
                width="100%"
                border="1.5px solid #3d405c"
                mb="14px"
                bgColor="transparent"
              />
              <Input
                prefix={<TelegramTwo />}
                placeholder="https://t.me/name"
                width="100%"
                border="1.5px solid #3d405c"
                mb="14px"
                bgColor="transparent"
              />
              <Input
                prefix={<TwitterTwo />}
                placeholder="https://twitter.com/name"
                width="100%"
                border="1.5px solid #3d405c"
                mb="14px"
                bgColor="transparent"
              />
            </Col>
          </Row>
          <CreateItemButton
            // onClick={() => imageFile && storeAsset(imageFile)}
            onClick={async () => {
              if (isDisconnected) return;
              // @akindeji
              // set name of contract here
              // set symbol of contract here (try and do a 4/3 letter abbreviation from the title if possible, or something random sha)
              const contract = await deployNftContract(signer, "Name", "Symbol");
              // you can get the address at (contract.address) here
            }}
            // loading={uploading}
            height="60px"
          >
            Create Collection
          </CreateItemButton>
        </CreateLayout>
      </MainLayout>
    </div>
  );
};

export default CreateCollection;
