import { FC } from "react";
import { Button } from "$components/App/Button/Button.styles";
import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Copy } from "$svgs/copy";
import { useRef } from "react";
import Avartar from "../Avartar/Avartar";
import {
  StyledUserAvartar,
  StyledUserHero,
  StyledUserHeroContainer,
} from "./UserHero.styles";
import { useQuery } from "react-query";
import { getUser } from "$utils/api";
import { truncateAddress } from "$utils/functions";
import { IUserHero } from "./UserHero.types";
import Image from "next/image";

const UserHero: FC<IUserHero> = ({ id }) => {
  const { data: userData, isLoading: isLoadingUser } = useQuery(
    ["user", id],
    () => getUser({ address: id })
  );
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  return (
    <StyledUserHero>
      <StyledUserHeroContainer
        justifyContent="flex-start"
        alignItems="center"
        gap="50px"
      >
        <StyledUserAvartar>
          <Image
            alt=""
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
            src={userData?.profile_picture ?? "/default-profile.jpeg"}
            layout="fill"
            objectFit="cover"
          />
        </StyledUserAvartar>
        <FlexibleDiv
          gap="12px"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <FlexibleDiv gap="8px">
            <HeadingTwo>
              {isLoadingUser ? "...." : userData?.name ?? "Set username"}
            </HeadingTwo>
          </FlexibleDiv>
          <Button
            ref={buttonRef}
            bgColor="transparent"
            border="2px solid #3D405C"
            icon={<Copy />}
            bgImage="none"
            onClick={() => {
              navigator.clipboard.writeText(userData?.address ?? "").then(
                function () {
                  if (spanRef?.current) {
                    spanRef.current.textContent = "Copied";
                    setTimeout(() => {
                      if (spanRef?.current) {
                        spanRef.current.textContent = truncateAddress(
                          userData?.address ?? ""
                        );
                      }
                    }, 1000);
                  }
                },
                function (err) {
                  console.error("Async: Could not copy text: ", err);
                }
              );
            }}
          >
            <span ref={spanRef}>
              {isLoadingUser ? "..." : truncateAddress(userData?.address ?? "")}
            </span>
          </Button>
        </FlexibleDiv>
      </StyledUserHeroContainer>
    </StyledUserHero>
  );
};

export default UserHero;
