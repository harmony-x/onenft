import { OneNftMarket__factory, OwnableNft__factory } from "typechain-types";

export const marketContract = (provider: any) => {
  // ADD actual contract address here
  return OneNftMarket__factory.connect("0x5FbDB2315678afecb367f032d93F642f64180aa3", provider);
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
