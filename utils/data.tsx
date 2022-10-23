import { Discord } from "$svgs/discord";
import { Medium } from "$svgs/medium";
import { Telegram } from "$svgs/telegram";
import { Twitter } from "$svgs/twitter";
import { Category, FooterLink, Menu, Social } from "$types/global";

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
    creatorName: "Hilary Rose",
    creatorImage: "/hillary.png",
    itemImage: "/primate.png",
    itemTitle: "Space Hoops #1022",
    currentBid: 10,
    time: "2d 14h 20m",
  },
  {
    creatorName: "Hilary Rose",
    creatorImage: "/hillary.png",
    itemImage: "/primate.png",
    itemTitle: "Space Hoops #1022",
    currentBid: 10,
    time: "2d 14h 20m",
  },
  {
    creatorName: "PrimatesXX",
    creatorImage: null,
    itemImage: "/primate.png",
    itemTitle: "Space Hoops #1022",
    currentBid: 10,
    time: "2d 14h 20m",
  },
  {
    creatorName: "PrimatesXX",
    creatorImage: "/hillary.png",
    itemImage: "/primate.png",
    itemTitle: "Space Hoops #1022",
    currentBid: 10,
    time: "2d 14h 20m",
  },
  {
    creatorName: "Iykee",
    creatorImage: "/hillary.png",
    itemImage: "/primate.png",
    itemTitle: "Space Hoops #1022",
    currentBid: 10,
    time: "2d 14h 20m",
  },
];

export const hotCollections = [
  {
    id: 1,
    address: "0x5e74dAD0e6743683e29D6f8aDd7a96398709a733",
  },
  {
    id: 2,
    address: "0xd114BaFb0c6A9D075C66515c8E4601c26a431b3e",
  },
  {
    id: 3,
    address: "0xd0ca730BF83c9236265574A00C7f0B2A5db5eCCF",
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
export const MARKETPLACE_ADDRESS = "0xEEF20045d1CC0A94D6D4Ee02dbB677FfFE45D9B9";
