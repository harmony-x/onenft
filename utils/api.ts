import { Category, ISODateString } from "$types/global";
import axios from "axios";
import { accessTokenKey } from "./data";

interface BaseResponse<T> {
  data: {
    updated_at: ISODateString;
    items: T;
    pagination: Pagination;
  };
}
interface Pagination {
  has_more: boolean;
  page_number: number;
  page_size: number;
  total_count: number | null;
}

interface NFTToken {
  contract_decimals: 0;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: null | string[];
  logo_url: string;
  token_id: string;
}

export interface NFTData {
  token_id: string;
  token_balance: string;
  token_url: string;
  supports_erc: string[];
  token_price_wei: null | string;
  token_quote_rate_eth: string | null;
  original_owner: string;
  external_data: {
    name: string;
    description: string;
    image: string;
    image_256: string;
    image_512: string;
    image_1024: string;
    animation_url: null | string;
    external_url: string;
    attributes: {
      trait_type: string;
      value: string;
    }[];
    owner: null | string;
  };
  owner: string;
  owner_address: string;
  burned: boolean;
}

export interface NFTTransaction {
  block_signed_at: ISODateString;
  block_height: number;
  tx_hash: string;
  tx_offset: number;
  successful: boolean;
  from_address: string;
  from_address_label: null | string;
  to_address: string;
  to_address_label: null | string;
  value: string;
  value_quote: number;
  log_events: {
    block_signed_at: string;
    decoded: {
      name: string;
      params: [
        {
          name: "from";
          type: "address";
          indexed: boolean;
          decoded: boolean;
          value: string;
        },
        {
          name: "to";
          type: "address";
          indexed: boolean;
          decoded: boolean;
          value: string;
        }
      ];
    };
  }[];
}

export type NFTMetaData = Omit<NFTToken, "token_id"> & {
  type: string;
  nft_data: NFTData[];
};

type NFTTransactions = Omit<NFTToken, "token_id"> & {
  type: string;
  nft_transactions: NFTTransaction[];
};

interface UserRequest {
  name: string;
  profile_picture: string;
}

interface Collection {
  address: string;
  category: Category;
  description: string;
  discord: string;
  email: string;
  image: string;
  instagram: string;
  name: string;
  owner: string;
  platform_created: true;
  royalty: 0;
  telegram: string;
  twitter: string;
  website: string;
}

interface UserResponse {
  active: boolean;
  address: string;
  name: string;
  profile_picture: string;
  collections: Collection[];
}

const covalentKey = "ckey_1d37f91734d44443acdbb6a30bf";

export const covalentApiInstance = axios.create({
  baseURL: `https://api.covalenthq.com/v1/1/`,
});

export const oneNFTApiInstance = axios.create({
  baseURL: `https://monkfish-app-bmj56.ondigitalocean.app`,
});

export const getSingleCollectionNFTs = async (address: string) =>
  await (
    await covalentApiInstance.get<BaseResponse<NFTToken[]>>(
      `/tokens/${address}/nft_token_ids/?key=${covalentKey}`
    )
  ).data.data;

export const getUserNFTs = async (address: string) =>
  await (
    await covalentApiInstance.get<BaseResponse<NFTMetaData[]>>(
      `/address/${address}/balances_v2/?key=${covalentKey}&nft=true&no-nft-fetch=true`
    )
  ).data.data;

export const getSingleNFTMetaData = async (address: string, token_id: string) =>
  await (
    await covalentApiInstance.get<BaseResponse<NFTMetaData[]>>(
      `tokens/${address}/nft_metadata/${token_id}/?key=${covalentKey}`
    )
  ).data.data;

export const getNFTTransactions = async (address: string, token_id: string) =>
  await (
    await covalentApiInstance.get<BaseResponse<NFTTransactions[]>>(
      `tokens/${address}/nft_transactions/${token_id}/?key=${covalentKey}`
    )
  ).data.data;

export const getProfile = async () => {
  if (typeof window !== "undefined" && !!localStorage.getItem(accessTokenKey)) {
    return await (
      await oneNFTApiInstance.get<UserResponse>("/api/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(accessTokenKey)}`,
        },
      })
    ).data;
  }
};
export const updateProfile = async (user: Partial<UserRequest>) => {
  if (typeof window !== "undefined" && !!localStorage.getItem(accessTokenKey)) {
    return await (
      await oneNFTApiInstance.patch<UserResponse>("/api/me", user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(accessTokenKey)}`,
        },
      })
    ).data;
  }
};
