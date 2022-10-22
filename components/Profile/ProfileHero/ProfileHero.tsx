import { useState, useEffect } from "react";
import { Button } from "$components/App/Button/Button.styles";
import { HeadingTwo } from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Copy } from "$svgs/copy";
import { useRef } from "react";
import Avartar from "../Avartar/Avartar";
import {
  StyledProfileHero,
  StyledProfileHeroContainer,
} from "./ProfileHero.styles";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { getProfile, updateProfile } from "$utils/api";
import { truncateAddress } from "$utils/functions";
import { Edit } from "$svgs/edit";
import Modal from "$components/App/Modal/Modal";
import { Input } from "$components/App/Input/Input.styles";

const ProfileHero = () => {
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
  const [editNameModal, setEditNameModal] = useState<boolean>(false);
  const [name, setName] = useState<string>(getProfileData?.name ?? "");
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (getProfileData) setName(getProfileData.name);
  }, [getProfileData]);

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
          <FlexibleDiv gap="8px">
            <HeadingTwo>
              {isLoadingGetProfile
                ? "...."
                : updateProfileData?.name ??
                  getProfileData?.name ??
                  "Set username"}
            </HeadingTwo>
            <button onClick={() => setEditNameModal(true)}>
              <Edit />
            </button>
          </FlexibleDiv>
          <Button
            ref={buttonRef}
            bgColor="transparent"
            border="2px solid #3D405C"
            icon={<Copy />}
            bgImage="none"
            onClick={() => {
              navigator.clipboard.writeText(getProfileData?.address ?? "").then(
                function () {
                  // alert("Copied!");
                  if (spanRef?.current) {
                    spanRef.current.textContent = "Copied";
                    setTimeout(() => {
                      if (spanRef?.current) {
                        spanRef.current.textContent = truncateAddress(
                          getProfileData?.address ?? ""
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
              {isLoadingGetProfile
                ? "..."
                : truncateAddress(getProfileData?.address ?? "")}
            </span>
          </Button>
        </FlexibleDiv>
      </StyledProfileHeroContainer>
      <Modal
        heading={"Edit name"}
        modalOpen={editNameModal}
        setModalOpen={setEditNameModal}
      >
        <FlexibleDiv justifyContent="flex-start" flexDir="column" gap="30px">
          <Input
            placeholder="Enter name"
            width="100%"
            border="1.5px solid #3d405c"
            bgColor="transparent"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoadingUpdateProfile || isLoadingGetProfile}
          />
          <Button
            disabled={isLoadingUpdateProfile || isLoadingGetProfile}
            width="100%"
            onClick={() => mutateUpdateProfile({ name })}
          >
            Save Changes
          </Button>
        </FlexibleDiv>
      </Modal>
    </StyledProfileHero>
  );
};

export default ProfileHero;
