import { FlexibleDiv } from "$components/Box/Box.styles";
import { Collection } from "$svgs/collection";
import { Logout } from "$svgs/log-out";
import { OnSale } from "$svgs/on-sale";
import { Profile } from "$svgs/profile";
import { accessTokenKey } from "$utils/data";
import { Dropdown } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useDisconnect } from "wagmi";
import { Menu, MenuText, MenuLinkContainer } from "./UserDropdown.styles";
import { IUserDropdownProps } from "./UserDropdown.types";

const UserDropdown: FC<IUserDropdownProps> = ({ children }) => {
  const router = useRouter();
  const { disconnect } = useDisconnect();
  const items = [
    {
      key: "1",
      label: (
        <Link href="/profile">
          <MenuLinkContainer as="a" gap="8px" justifyContent="flex-start">
            <Profile />
            <MenuText>Profile</MenuText>
          </MenuLinkContainer>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/">
          <MenuLinkContainer as="a" gap="8px" justifyContent="flex-start">
            <OnSale />
            <MenuText>On Sale</MenuText>
          </MenuLinkContainer>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/my-collections">
          <MenuLinkContainer as="a" gap="8px" justifyContent="flex-start">
            <Collection />
            <MenuText>My Collection</MenuText>
          </MenuLinkContainer>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <MenuLinkContainer
          onClick={() => {
            disconnect();
            localStorage.removeItem(accessTokenKey);
            router.push("/");
          }}
          as="button"
          gap="8px"
          justifyContent="flex-start"
        >
          <Logout />
          <MenuText>Log Out</MenuText>
        </MenuLinkContainer>
      ),
    },
  ];
  return (
    <Dropdown overlay={<Menu items={items} />} placement="bottomLeft" arrow>
      {children}
    </Dropdown>
  );
};

export default UserDropdown;
