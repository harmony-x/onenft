import { Button } from "$components/App/Button/Button.styles";
import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Copy } from "$svgs/copy";
import { MutableRefObject, useRef } from "react";
import Avartar from "../Avartar/Avartar";
import {
  StyledProfileHero,
  StyledProfileHeroContainer,
} from "./ProfileHero.styles";

const ProfileHero = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <StyledProfileHero>
      <StyledProfileHeroContainer
        justifyContent="flex-start"
        alignItems="center"
        gap="50px"
      >
        <Avartar />
        <FlexibleDiv
          gap="12px"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <HeadingTwo>0x84f0...2c34</HeadingTwo>
          <Button
            ref={buttonRef}
            bgColor="transparent"
            border="2px solid #3D405C"
            icon={<Copy />}
            bgImage="none"
            onClick={() => {
              navigator.clipboard.writeText("0x84f0...2c34").then(
                function () {
                  // alert("Copied!");
                  if (buttonRef?.current) {
                    buttonRef.current.textContent = "Copied";
                    setTimeout(() => {
                      if (buttonRef?.current) {
                        buttonRef.current.textContent = "0x84f0...2c34";
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
            0x84f0...2c34
          </Button>
        </FlexibleDiv>
      </StyledProfileHeroContainer>
    </StyledProfileHero>
  );
};

export default ProfileHero;
