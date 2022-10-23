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
import { Col, Row } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import { NFTStorage, File } from "nft.storage";
import { useState } from "react";

const CreateNFT: NextPage = () => {
  const [imageFile, setImageFile] = useState<File | null | string>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const gateway = "https://nftstorage.link/ipfs/";

  const keyA =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZhRTM3QTEwMmMyMGZlNkRERjE5MTEwZkJlODczYTQ5NTh";
  const keyB =
    "jM0M2Y0UiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NjMwNDcxMTA1MywibmFtZSI6Im9uZW5mdCJ9.pTlZT05HJrIZWyuVlQJc1Vh0y6F_-P24HAZRYgMsCE0";

  async function storeAsset(image: File) {
    // setImageUrl(null);
    try {
      setUploading(true);
      const client = new NFTStorage({ token: keyA + keyB });
      const metadata = await client.store({
        name: "Test NFT",
        description: "This Test NFT is da best!",
        image,
        supply: 3,
      });
      // setImageUrl(metadata.data.image.href.replace("ipfs://", gateway));
      console.log(
        "Metadata stored on Filecoin and IPFS with URL:",
        encodeURI(metadata.data.image.href.replace("ipfs://", gateway))
      );
    } catch (error) {
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>ONENFT</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CreateLayout>
          <HeadingTwo mb="53px">Create new Item</HeadingTwo>
          <Row gutter={{ xs: 24, lg: 32 }}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <HeadingFive mb="24px">
                Image, Video, Audio or 3D Model
              </HeadingFive>
              <HeadingSix
                mb="32px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                File types supported: JPG, PNG, GIF, MP4, WEBM. Max size: 100MB
              </HeadingSix>
              <ImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                mb="32px"
              />
              <HeadingFive mb="24px">Add to collection</HeadingFive>
              <HeadingSix
                mb="32px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                This is the collection where your item will appear{" "}
              </HeadingSix>
              <Select height="50px" placeholder="Select Collection" mb="32px" />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <HeadingFive mb="24px">Item Name</HeadingFive>
              <Input
                placeholder="Type item name"
                width="100%"
                border="1.5px solid #3D405C"
                bgColor="transparent"
                mb="32px"
              />
              <HeadingFive mb="24px">Item Description</HeadingFive>
              <TextArea
                placeholder="Provide a detailed description for your item"
                width="100%"
                border="1.5px solid #3D405C"
                maxLength={300}
                mb="32px"
              />
              <HeadingFive mb="24px">Supply</HeadingFive>
              <HeadingSix
                mb="32px"
                weight="300"
                color="rgba(255, 255, 255, 0.47)"
              >
                The number of items that can be minted
              </HeadingSix>
              <Input
                placeholder="1"
                width="100%"
                border="1.5px solid #3d405c"
                mb="32px"
                bgColor="transparent"
              />
            </Col>
          </Row>
          <CreateItemButton
            onClick={() =>
              typeof imageFile !== "string" &&
              imageFile &&
              storeAsset(imageFile)
            }
            loading={uploading}
            height="60px"
          >
            Create Item
          </CreateItemButton>
        </CreateLayout>
      </MainLayout>
    </div>
  );
};

export default CreateNFT;
