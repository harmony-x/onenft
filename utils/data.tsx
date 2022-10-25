import { Discord } from "$svgs/discord";
import { Harmony } from "$svgs/harmony";
import { Medium } from "$svgs/medium";
import { Telegram } from "$svgs/telegram";
import { Twitter } from "$svgs/twitter";
import { USDT } from "$svgs/usdt";
import { Category, FooterLink, Menu, Social } from "$types/global";
import { imageAdresses } from "./imageAddress";

export const headerLinks = [
  {
    name: "Explore",
    link: "/",
  },
  {
    name: "Activity",
    link: "#",
  },
  {
    name: "Create",
    link: "/create-nft",
  },
];

export const footerLinks: FooterLink[] = [
  {
    heading: "MARKETPLACE",
    menu: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Discover",
        link: "/",
      },
      {
        name: "NFT Ranking",
        link: "/",
      },
    ],
  },
  {
    heading: "RESOURCES",
    menu: [
      {
        name: "Learn",
        link: "/",
      },
      {
        name: "Help Center",
        link: "/",
      },
      {
        name: "Platform Status",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
    ],
  },
];

export const otherLinks: Menu[] = [
  {
    name: "Privacy Policy",
    link: "/",
  },
  {
    name: "Terms of Service",
    link: "/",
  },
];

export const socialLinks: Social[] = [
  {
    icon: <Twitter />,
    link: "twitter.com",
  },
  {
    icon: <Telegram />,
    link: "telegram.com",
  },
  {
    icon: <Discord />,
    link: "discord.com",
  },
  {
    icon: <Medium />,
    link: "medium.com",
  },
];

export const explore = [
  {
    creatorName: "ONENFT Team Member",
    creatorImage: imageAdresses[0],
    itemImage:
      "https://nftstorage.link/ipfs/bafybeicqcmom7vabsbcxwfdvobs7ezn6algmz3sloccikocywy4qpaotl4/nlk.png",
    itemTitle: "My NLK Membership",
    currentBid: 1000,
    id: "0xfa7E117f11F63386e541cA5969ae6F49286e5AF2",
    tokenId: "0",
    currency: "USDT",
  },
  {
    creatorName: "Rick & Morty",
    creatorImage: imageAdresses[1],
    itemImage:
      "https://nftstorage.link/ipfs/bafybeiegikp77xk3s6u6634lctfjggkdiwod7jpqbbg7qstdridy4lnn2e/2880737.png",
    itemTitle: "Rick #1",
    currentBid: 20000,
    id: "0x0A68785B80F84eDdcAd5D806fEc13D8D98eAE472",
    tokenId: "0",
    currency: "ONE",
  },
  {
    creatorName: "ONENFT Team Member",
    creatorImage: imageAdresses[0],
    itemImage:
      "https://nftstorage.link/ipfs/bafybeicqcmom7vabsbcxwfdvobs7ezn6algmz3sloccikocywy4qpaotl4/nlk.png",
    itemTitle: "My NLK Membership",
    currentBid: 1000,
    id: "0xfa7E117f11F63386e541cA5969ae6F49286e5AF2",
    tokenId: "0",
    currency: "USDT",
  },
];

export const hotCollections = [
  {
    id: 1,
    address: "0xfa7E117f11F63386e541cA5969ae6F49286e5AF2",
  },
  {
    id: 2,
    address: "0xd114BaFb0c6A9D075C66515c8E4601c26a431b3e",
  },
  {
    id: 3,
    address: "0xd0ca730BF83c9236265574A00C7f0B2A5db5eCCF",
  },
  {
    id: 4,
    address: "0x337f741c89057026Cf9d3a1b82df5c48b03A574A",
  },
  {
    id: 5,
    address: "0x4B1DAe1F2b9cd98422b2E52595E1A8De32825903",
  },
  {
    id: 6,
    address: "0xa38a092bD015Fec61A9919F559a4C8cBB9CeE6A0",
  },
  {
    id: 7,
    address: "0x03B57fdCaA42acdadc9146459A9f0b8bB4671077",
  },
  {
    id: 8,
    address: "0xfa7E117f11F63386e541cA5969ae6F49286e5AF2",
  },
  {
    id: 9,
    address: "0x5e74dAD0e6743683e29D6f8aDd7a96398709a733",
  },
];

export const activity = [
  {
    event: "Transfer",
    price: 2751.36,
    from: "0x84f0...2c34",
    to: "0x84f0...2c34",
    time: "yesterday",
    key: 0,
  },
  {
    event: "Listed",
    price: 2751.36,
    from: "0x84f0...2c34",
    to: "-",
    time: "7 days ago",
    key: 1,
  },
  {
    event: "Transfer",
    price: 2022.26,
    from: "PrimatesXX",
    to: "0x974...3df6",
    time: "a month ago",
    key: 2,
  },
  {
    event: "Transfer",
    price: 2022.26,
    from: "PrimatesXX",
    to: "0x974...3df6",
    time: "a month ago",
    key: 3,
  },
  {
    event: "Transfer",
    price: 2022.26,
    from: "PrimatesXX",
    to: "0x974...3df6",
    time: "a month ago",
    key: 4,
  },
  {
    event: "Transfer",
    price: 2022.26,
    from: "PrimatesXX",
    to: "0x974...3df6",
    time: "a month ago",
    key: 5,
  },
  {
    event: "Transfer",
    price: 2022.26,
    from: "PrimatesXX",
    to: "0x974...3df6",
    time: "a month ago",
    key: 6,
  },
];

export const categories: {
  name: Category;
  image: string;
}[] = [
  {
    name: "art",
    image:
      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1666539937/WhatsApp_Image_2022-10-23_at_16.44.09_bpzyv8.jpg",
  },
  {
    name: "music",
    image:
      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1666539937/WhatsApp_Image_2022-10-23_at_16.44.08_vy5wom.jpg",
  },
  {
    name: "trading card",
    image:
      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1666539937/WhatsApp_Image_2022-10-23_at_16.44.07_lrk1vf.jpg",
  },
  {
    name: "collectibles",
    image:
      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1666539937/WhatsApp_Image_2022-10-23_at_16.44.06_ca1t6w.jpg",
  },
  {
    name: "photography",
    image:
      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1666539936/WhatsApp_Image_2022-10-23_at_16.44.05_u3vs1j.jpg",
  },
  {
    name: "virtual world",
    image:
      "https://res.cloudinary.com/dexg5uy3d/image/upload/v1666539936/WhatsApp_Image_2022-10-23_at_16.44.04_z8xgou.jpg",
  },
];

export const accessTokenKey = "oneNFT_accessToken";
export const MARKETPLACE_ADDRESS = "0x720d45aB23a02000c2d61079361Ca43417db25a9";

export const tokens = [
  {
    name: "ONE",
    address: "0x0000000000000000000000000000000000000000",
    decimals: 18,
    svg: <Harmony />,
  },
  {
    name: "USDT",
    address: "0x51f68CD4EBa5aFB92899871B0a46da51F9808b90",
    decimals: 18,
    svg: <USDT width={18} height={18} />,
  },
];
