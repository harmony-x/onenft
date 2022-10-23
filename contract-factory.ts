import { OneNftMarket__factory, OwnableNft__factory } from "typechain-types";
import { useSigner } from "wagmi";

export const marketContract = (provider: any) => {
  const signer = provider.getSigner();
  // ADD contract address here
  return OneNftMarket__factory.connect("0x0", signer);
};

export const deployNftContract = async (
  signer: any,
  name: string,
  symbol: string
) => {
  const contract = new OwnableNft__factory(signer);
  let deployedContract = await contract.deploy(name, symbol);
  deployedContract = await deployedContract.deployed();
  return deployedContract;
};
