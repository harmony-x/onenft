import Image from "next/image";
import { FC } from "react";
import {
  CreatorDisplayContainer,
  CreatorDisplayImage,
} from "./CreatorDisplay.styles";
import { ICreatorDisplayProps } from "./CreatorDisplay.types";

const CreatorDisplay: FC<ICreatorDisplayProps> = ({ name, img }) => {
  return (
    <CreatorDisplayContainer
      as="p"
      gap="6px"
      alignItems="center"
      justifyContent="flex-start"
    >
      <CreatorDisplayImage>
        <Image layout="fill" src={img ?? "/default-avartar.png"} alt="" />
      </CreatorDisplayImage>
      <span>{name}</span>
    </CreatorDisplayContainer>
  );
};

export default CreatorDisplay;
