import { OneNftMarket__factory } from "typechain-types";

export const marketContract = (provider: any) => {
    const signer = provider.getSigner();
    // ADD contract address here
    return OneNftMarket__factory.connect("0x0", signer)
};