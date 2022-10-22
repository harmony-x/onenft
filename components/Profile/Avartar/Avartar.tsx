import Camera from "$svgs/camera";
import { getBase64 } from "$utils/functions";
import { Spin } from "antd";
import Image from "next/image";
import { StyledAvartar } from "./Avartar.styles";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { getProfile, updateProfile } from "$utils/api";

const Avartar = () => {
  const queryClient = useQueryClient();
  const { data: getProfileData, isLoading: isLoadingGetProfile } = useQuery(
    ["userProfile"],
    () => getProfile()
  );
  const {
    data: updateProfileData,
    isLoading: isLoadingUpdateProfile,
    mutate: mutateUpdateProfile,
  } = useMutation("updateProfile", updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"]);
    },
  });
  console.log(isLoadingUpdateProfile || isLoadingGetProfile);
  return (
    <StyledAvartar>
      <Image
        alt=""
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
        src={
          updateProfileData?.profile_picture ??
          getProfileData?.profile_picture ??
          "/default-profile.jpeg"
        }
        layout="fill"
        objectFit="cover"
      />
      <input
        type="file"
        onChange={async (e) => {
          if (e.target.files && e.target.files[0].size / 1024 / 1024 < 2) {
            getBase64(e.target.files[0]).then(async (res) => {
              const res1 = mutateUpdateProfile({ profile_picture: res });
              console.log(res1);
            });
          }
        }}
        disabled={isLoadingUpdateProfile || isLoadingGetProfile}
        accept="image/x-png,image/gif,image/jpeg,image/jpg"
      />
      {isLoadingUpdateProfile || isLoadingGetProfile ? <Spin /> : <Camera />}
    </StyledAvartar>
  );
};

export default Avartar;
