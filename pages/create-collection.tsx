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
import { Col, Form, Row } from "antd";
import { deployNftContract } from "contract-factory";
import type { NextPage } from "next";
import Head from "next/head";
import { NFTStorage, File } from "nft.storage";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";
import { useMutation, useQueryClient } from "react-query";
import { postCollection } from "$utils/api";
import { Category } from "$types/global";
import toast from "$utils/toast";
import useAuthenticate from "$hooks/useAuthenticate";
import { useRouter } from "next/router";
import { generateSymbol } from "$utils/functions";

const CreateCollection: NextPage = () => {
  const [imageFile, setImageFile] = useState<string | null | File>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [categorySelect, setCategorySelect] = useState<Category>(null);
  const { data: signer } = useSigner();
  const { isDisconnected } = useAccount();
  const queryClient = useQueryClient();
  const {
    data: postCollectionData,
    isLoading: isLoadingPostCollection,
    mutate: mutatePostCollection,
  } = useMutation("collections", postCollection, {
    onSuccess: () => {
      queryClient.invalidateQueries(["collections"]);
    },
  });
  const router = useRouter();
  const [form] = Form.useForm();
  useAuthenticate();

  return (
    <div>
      <Head>
        <title>ONENFT - Create collection</title>
        <meta name="description" content="An NFT MArketplace and Explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Form
          form={form}
          name="create-collection"
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          onFinish={async ({
            description,
            discord,
            name,
            royalties,
            telegram,
            twitter,
            website,
          }: {
            royalties: string;
            name: string;
            description: string;
            website: string;
            discord: string;
            telegram: string;
            twitter: string;
          }) => {
            if (isDisconnected) return;
            setUploading(true);
            // @akindeji
            // set name of contract here
            // set symbol of contract here (try and do a 4/3 letter abbreviation from the title if possible, or something random sha)
            const contract = await deployNftContract(
              signer,
              name,
              generateSymbol(name)
            );
            setUploading(false);
            mutatePostCollection(
              {
                address: contract.address,
                description,
                discord,
                name,
                platform_created: true,
                telegram,
                twitter,
                website,
                image:
                  imageFile && typeof imageFile === "string" ? imageFile : "",
                royalty: parseInt(royalties),
                category: categorySelect,
              },
              {
                onSuccess: () => {
                  toast("success", "Created collection successfully");
                  form.resetFields();
                  router.push("/my-collections");
                },
                onError: () => {
                  toast("error", "Failed to create collection");
                },
              }
            );
            // you can get the address at (contract.address) here
          }}
        >
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
                  value={categorySelect}
                  onChange={(e) => setCategorySelect(e as Category)}
                  options={[
                    { value: null, label: "Select Category" },
                    { value: "virtual world", label: "Virtual Worlds" },
                    { value: "Trading Card", label: "Trading Card" },
                    { value: "music", label: "Music" },
                    { value: "art", label: "Art" },
                    { value: "photography", label: "Photography" },
                    { value: "collectibles", label: "Collectibles" },
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
                <Form.Item
                  name="royalties"
                  rules={[
                    { required: true, message: "This field is required" },
                    {
                      required: true,
                      message: "Enter a number",
                      pattern: new RegExp(/^[0-9]+$/),
                    },
                    () => ({
                      validator(_, value) {
                        if (parseInt(value) <= 100 && parseInt(value) >= 0) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Must be between 0 and 100")
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    prefix={<HeadingSix>%</HeadingSix>}
                    placeholder="Enter royalties"
                    width="100%"
                    border="1.5px solid #3d405c"
                    mb="32px"
                    bgColor="transparent"
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <HeadingFive mb="24px">Collection Name</HeadingFive>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    placeholder="Example: Lord of the Rings"
                    width="100%"
                    border="1.5px solid #3D405C"
                    bgColor="transparent"
                    mb="32px"
                  />
                </Form.Item>
                <HeadingFive mb="24px">Description</HeadingFive>
                <Form.Item
                  name="description"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <TextArea
                    placeholder="Provide a detailed description for your collection"
                    width="100%"
                    border="1.5px solid #3D405C"
                    maxLength={300}
                    mb="32px"
                  />
                </Form.Item>
                <HeadingFive mb="24px">Social Links</HeadingFive>
                <HeadingSix
                  mb="32px"
                  weight="300"
                  color="rgba(255, 255, 255, 0.47)"
                >
                  Add your website, discord, telegram & Twitter links
                </HeadingSix>
                <Form.Item
                  name="website"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    prefix={<Website />}
                    placeholder="https://yourwebsite.com"
                    width="100%"
                    border="1.5px solid #3d405c"
                    mb="14px"
                    bgColor="transparent"
                  />
                </Form.Item>

                <Form.Item
                  name="discord"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    prefix={<DiscordTwo />}
                    placeholder="https://discord.gg/name"
                    width="100%"
                    border="1.5px solid #3d405c"
                    mb="14px"
                    bgColor="transparent"
                  />
                </Form.Item>
                <Form.Item
                  name="telegram"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    prefix={<TelegramTwo />}
                    placeholder="https://t.me/name"
                    width="100%"
                    border="1.5px solid #3d405c"
                    mb="14px"
                    bgColor="transparent"
                  />
                </Form.Item>

                <Form.Item
                  name="twitter"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Input
                    prefix={<TwitterTwo />}
                    placeholder="https://twitter.com/name"
                    width="100%"
                    border="1.5px solid #3d405c"
                    mb="14px"
                    bgColor="transparent"
                  />
                </Form.Item>
              </Col>
            </Row>
            <CreateItemButton
              htmlType="submit"
              loading={isLoadingPostCollection || uploading}
              height="60px"
            >
              Create Collection
            </CreateItemButton>
          </CreateLayout>
        </Form>
      </MainLayout>
    </div>
  );
};

export default CreateCollection;
