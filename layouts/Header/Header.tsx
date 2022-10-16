import { Input } from "$components/App/Input/Input.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import ConnectButton from "$components/RainbowKit/ConnectButton/ConnectButton";
import { Search } from "$svgs/search";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Button,
  HarmburgerSmall,
  InputContainer,
  LightModeSmall,
  LogoBig,
  LogoSmall,
  MenuBig,
  NavBig,
  NavSmall,
  StyledHeader,
  StyledLink,
} from "./Header.styles";
import { IHeaderProps } from "./Header.types";

const Header: FC<IHeaderProps> = () => {
  return (
    <StyledHeader>
      <NavBig>
        <Link href="/">
          <LogoBig>
            <Image layout="fill" alt="" src="/onenft.png" objectFit="contain" />
          </LogoBig>
        </Link>
        <InputContainer>
          <Input
            prefix={<Search />}
            placeholder="Search by items/User/Address"
            width="100%"
          />
        </InputContainer>
        <MenuBig>
          {["Explore", "Activity", "Create"].map((item) => (
            <Link key={item} href="#">
              <StyledLink weight="400">{item}</StyledLink>
            </Link>
          ))}
          <button>
            <LightModeSmall />
          </button>
        </MenuBig>
        <Button>
          <ConnectButton />
        </Button>
      </NavBig>
      <NavSmall>
        <Link href="/">
          <LogoSmall>
            <Image layout="fill" alt="" src="/onenft.png" objectFit="contain" />
          </LogoSmall>
        </Link>
        <FlexibleDiv width="max-content" gap="19px">
          <button>
            <LightModeSmall />
          </button>

          <button>
            <HarmburgerSmall />
          </button>
        </FlexibleDiv>
      </NavSmall>
    </StyledHeader>
  );
};

export default Header;
