import Camera from "$svgs/camera";
import { Spin } from "antd";
import Image from "next/image";
import { StyledAvartar } from "./Avartar.styles";

const Avartar = () => {
  return (
    <StyledAvartar>
      <Image alt="" src="/primate.png" layout="fill" objectFit="cover" />
      <input
        type="file"
        // onChange={handleUploadPhoto}
        // disabled={isPhotoUpdating}
        accept="image/x-png,image/gif,image/jpeg,image/jpg"
      />
      <Camera />
      {/* <Spin /> */}
    </StyledAvartar>
  );
};

export default Avartar;
