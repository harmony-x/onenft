import { Button } from "$components/App/Button/Button.styles";
import UserDropdown from "$components/App/UserDropdown/UserDropdown";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { ArrowDown } from "$svgs/arrow-down";
import { getProfile } from "$utils/api";
import { applyEllipsis } from "$utils/functions";
import { ConnectButton as RainbowKitConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useQuery } from "react-query";
import { ChainButton, ProfileAvartar } from "./ConnectButton.styles";

const ConnectButton = () => {
  const { data: profileData, isLoading: isLoadingProfile } = useQuery(
    ["userProfile"],
    getProfile
  );

  return (
    <RainbowKitConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button width="100%" onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    bgImage="linear-gradient(45deg, #E23B49 6.89%, #8084DC 93.89%)"
                    width="100%"
                    onClick={openChainModal}
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <FlexibleDiv
                  justifyContent="flex-start"
                  alignItems="center"
                  gap="12px"
                >
                  <ChainButton
                    alignItems="center"
                    gap="9px"
                    onClick={openAccountModal}
                    type="button"
                    flexWrap="nowrap"
                    justifyContent="space-between"
                    as="button"
                  >
                    {chain.hasIcon ? (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 18,
                          height: 18,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={18}
                            height={18}
                          />
                        )}
                      </div>
                    ) : (
                      <Image
                        alt={chain.name ?? "Chain icon"}
                        src={"/harmony.png"}
                        width={18}
                        height={18}
                      />
                    )}
                    {applyEllipsis(chain.name ?? "", 7).replace("...", "")}
                    {/* {chain.name} */}
                    <ArrowDown />
                  </ChainButton>
                  <UserDropdown>
                    <ProfileAvartar>
                      <Image
                        alt=""
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
                        src={
                          profileData?.profile_picture ??
                          "/default-profile.jpeg"
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                    </ProfileAvartar>
                  </UserDropdown>

                  {/* <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button> */}
                </FlexibleDiv>
              );
            })()}
          </div>
        );
      }}
    </RainbowKitConnectButton.Custom>
  );
};

export default ConnectButton;
