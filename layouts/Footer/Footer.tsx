import { FlexibleDiv } from "$components/Box/Box.styles";
import { Copyright } from "$svgs/copyright";
import { footerLinks, otherLinks, socialLinks } from "$utils/data";
import Image from "next/image";
import Link from "next/link";
import {
  StyledFooter,
  FooterLogo,
  FooterMenuBig,
  FooterMenuHeading,
  FooterMenuLink,
  FooterMenuSmall,
  FooterMenuTagline,
  FooterSocialLinks,
  FooterCopyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenuBig>
        <FlexibleDiv
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDir="column"
          gap="16px"
          width="25%"
        >
          <Link href="/">
            <FooterLogo>
              <Image
                layout="fill"
                alt=""
                src="/onenft.png"
                objectFit="contain"
              />
            </FooterLogo>
          </Link>
          <FooterMenuTagline>
            ONENFT is an <span>NFT Marketplace</span> that allow user to
            buy/sell HRC721 and HRC1155 tokens using HRC20 tokens or ONE tokens.
          </FooterMenuTagline>
        </FlexibleDiv>
        <FlexibleDiv
          width="60%"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {footerLinks.map(({ heading, menu }) => (
            <FlexibleDiv
              alignItems="flex-start"
              flexDir="column"
              gap="14px"
              key={heading}
            >
              <FooterMenuHeading>{heading}</FooterMenuHeading>
              <FlexibleDiv alignItems="flex-start" flexDir="column" gap="7px">
                {menu.map(({ link, name }) => (
                  <Link href={link} key={name}>
                    <FooterMenuLink>{name}</FooterMenuLink>
                  </Link>
                ))}
              </FlexibleDiv>
            </FlexibleDiv>
          ))}
          <FlexibleDiv alignItems="flex-start" flexDir="column" gap="14px">
            <FooterMenuHeading>LINKS</FooterMenuHeading>
            <FlexibleDiv alignItems="flex-start" flexDir="column" gap="7px">
              {otherLinks.map(({ link, name }) => (
                <Link href={link} key={name}>
                  <FooterMenuLink>{name}</FooterMenuLink>
                </Link>
              ))}
            </FlexibleDiv>
            <FooterSocialLinks
              gap="14px"
              alignItems="center"
              justifyContent="flex-start"
            >
              {socialLinks.map(({ icon, link }, i) => (
                <Link href={link} key={i}>
                  <a>{icon}</a>
                </Link>
              ))}
            </FooterSocialLinks>
          </FlexibleDiv>
        </FlexibleDiv>
      </FooterMenuBig>
      <FooterMenuSmall>
        <FlexibleDiv
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDir="column"
          gap="16px"
          width="100%"
        >
          <Link href="/">
            <FooterLogo>
              <Image
                layout="fill"
                alt=""
                src="/onenft.png"
                objectFit="contain"
              />
            </FooterLogo>
          </Link>
          <FooterMenuTagline>
            ONENFT is an <span>NFT Marketplace</span> that allow user to
            buy/sell HRC721 and HRC1155 tokens using HRC20 tokens or ONE tokens.
          </FooterMenuTagline>
        </FlexibleDiv>
        <FlexibleDiv
          width="100%"
          justifyContent="space-between"
          alignItems="flex-start"
          // gap="32px"
        >
          {footerLinks.map(({ heading, menu }) => (
            <FlexibleDiv
              alignItems="flex-start"
              flexDir="column"
              gap="14px"
              width="45%"
              margin="0 0 32px 0"
              key={heading}
            >
              <FooterMenuHeading>{heading}</FooterMenuHeading>
              <FlexibleDiv alignItems="flex-start" flexDir="column" gap="7px">
                {menu.map(({ link, name }) => (
                  <Link href={link} key={name}>
                    <FooterMenuLink>{name}</FooterMenuLink>
                  </Link>
                ))}
              </FlexibleDiv>
            </FlexibleDiv>
          ))}
          <FlexibleDiv
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <FlexibleDiv
              width="45%"
              alignItems="flex-start"
              flexDir="column"
              gap="14px"
            >
              <FooterMenuHeading>LINKS</FooterMenuHeading>
              <FlexibleDiv alignItems="flex-start" flexDir="column" gap="7px">
                {otherLinks.map(({ link, name }) => (
                  <Link href={link} key={name}>
                    <FooterMenuLink>{name}</FooterMenuLink>
                  </Link>
                ))}
              </FlexibleDiv>
            </FlexibleDiv>
            <FooterSocialLinks
              width="45%"
              gap="14px"
              alignItems="center"
              justifyContent="flex-start"
            >
              {socialLinks.map(({ icon, link }, i) => (
                <Link href={link} key={i}>
                  <a>{icon}</a>
                </Link>
              ))}
            </FooterSocialLinks>
          </FlexibleDiv>
        </FlexibleDiv>
      </FooterMenuSmall>
      <FooterCopyright gap="10px" alignItems="center">
        <Copyright />
        <FooterMenuTagline>2022 ONENFT.com</FooterMenuTagline>
      </FooterCopyright>
    </StyledFooter>
  );
};

export default Footer;
