import { MARKETPLACE_ADDRESS } from "$utils/data";
import { OneNftMarket__factory, OwnableNft__factory } from "typechain-types";

export const marketContract = (provider: any) => {
  return OneNftMarket__factory.connect(MARKETPLACE_ADDRESS, provider);
};

export const nftContract = (address: string, provider: any) => {
  return OwnableNft__factory.connect(address, provider);
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
