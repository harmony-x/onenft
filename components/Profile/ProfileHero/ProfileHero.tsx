import { Button } from "$components/App/Button/Button.styles";
import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Copy } from "$svgs/copy";
import Avartar from "../Avartar/Avartar";
import {
  StyledProfileHero,
  StyledProfileHeroContainer,
} from "./ProfileHero.styles";

const ProfileHero = () => {
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
            bgColor="transparent"
            border="2px solid #3D405C"
            icon={<Copy />}
            bgImage="none"
          >
            0x84f0...2c34
          </Button>
        </FlexibleDiv>
      </StyledProfileHeroContainer>
    </StyledProfileHero>
  );
};

export default ProfileHero;
