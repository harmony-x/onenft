import { Discord } from "$svgs/discord";
import { Medium } from "$svgs/medium";
import { Telegram } from "$svgs/telegram";
import { Twitter } from "$svgs/twitter";
import { FooterLink, Menu, Social } from "$types/global";

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
