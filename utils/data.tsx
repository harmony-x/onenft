import { Discord } from "$svgs/discord";
import { Medium } from "$svgs/medium";
import { Telegram } from "$svgs/telegram";
import { Twitter } from "$svgs/twitter";
import { FooterLink, Menu, Social } from "$types/global";

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
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 1,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 2,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 3,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 4,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 5,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 6,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 7,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 8,
  },
  {
    image: "",
    name: "Melody NFT",
    price: 100,
    id: 9,
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
export const accessTokenKey = "oneNFT_accessToken";
