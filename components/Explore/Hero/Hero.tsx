import ExploreSlider from "../ExploreSlider/ExploreSlider";
import { HeroHeading, StyledHero } from "./Hero.styles";

const Hero = () => {
  return (
    <StyledHero>
      <HeroHeading>
        Discover,<span>Collect</span> and Trade <span>NFTs</span>
      </HeroHeading>
      <ExploreSlider />
    </StyledHero>
  );
};

export default Hero;
