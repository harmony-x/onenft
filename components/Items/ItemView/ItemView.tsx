import { Button } from "$components/App/Button/Button.styles";
import CreatorDisplay from "$components/App/CreatorDisplay/CreatorDisplay";
import { Table } from "$components/App/Table/Table.styles";
import {
  HeadingFour,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { Harmony } from "$svgs/harmony";
import { getNFTTransactions, NFTTransaction } from "$utils/api";
import { activity } from "$utils/data";
import { truncateAddress } from "$utils/functions";
import { ColumnsType } from "antd/lib/table";
import { marketContract } from "contract-factory";
import { FC } from "react";
import {
  ItemViewPrice,
  ItemViewTab,
  StyledItemView,
  StyledItemViewContent,
  StyledItemViewContentText,
  StyledItemViewImage,
} from "./ItemView.styles";
import { IItemViewProps } from "./ItemView.types";
import { useQuery } from "react-query";
import { Image } from "antd";
import { useAccount, useProvider, useSigner } from "wagmi";

const ItemView: FC<IItemViewProps> = ({
  button,
  creatorName,
  description,
  ownerName,
  itemName,
  itemImage,
  id,
  tokenId,
}) => {
  const { data, isLoading } = useQuery(
    ["nftTransactionsData", id, tokenId],
    () => getNFTTransactions(id, tokenId)
  );
  const logs: NFTTransaction["log_events"] = [];
  if (data) {
    data.items[0].nft_transactions.forEach(({ log_events }) =>
      log_events.forEach((item) => logs.push(item))
    );
  }

  const columns: ColumnsType<typeof activity[number]> = [
    {
      title: "Event",
      dataIndex: "event",
    },
    // {
    //   title: "Price",
    //   dataIndex: "price",
    //   render: (text) => (
    //     <ItemViewPrice
    //       className="small"
    //       alignItems="center"
    //       justifyContent="flex-start"
    //     >
    //       <Harmony className="small" />
    //       {text}
    //     </ItemViewPrice>
    //   ),
    // },
    {
      title: "From",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "Time",
      dataIndex: "time",
    },
  ];
  const { data: signer } = useSigner();
  const defaultProvider = useProvider();
  const provider = signer ?? defaultProvider;
  const { isDisconnected } = useAccount();

  // @akindeji
  // You can manage the onClick logic else where if needed
  const onClick = async () => {
    // remember to check if the user is connected
    if (isDisconnected) return;
    // remember to disable clicking on pressing the button, can enable it in finally block
    try {
      const tx = await marketContract(provider).buyNft(
        // put actual nft contract address
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        // put actual nft id
        1
      );
      // wait for two confirmations
      await tx.wait(2);
      // refresh page or something, just make sure new owner shows and all
    } catch (error) {
      // handle error, a generic message showing item couldn't be bought works
    }
  };
  return (
    <StyledItemView
      as="section"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <StyledItemViewImage>
        <Image
          src={itemImage}
          alt=""
          width="100%"
          height="100%"
          placeholder={
            <Image
              alt=""
              preview={false}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkE+WrBwABHACybY9s4AAAAABJRU5ErkJggg=="
              width="100%"
              height="100%"
            />
          }
          preview={false}
        />
      </StyledItemViewImage>
      <StyledItemViewContent>
        <CreatorDisplay
          mb="14px"
          name={creatorName}
          img="/default-profile.jpeg"
        />
        <HeadingTwo mb="6px" as="h3">
          {itemName}
        </HeadingTwo>
        <StyledItemViewContentText className="owner">
          Owned by <span className="span">{truncateAddress(ownerName)}</span>
        </StyledItemViewContentText>
        <StyledItemViewContentText mb="15px">
          Current price
        </StyledItemViewContentText>
        <ItemViewPrice justifyContent="flex-start">
          <Harmony />
          <HeadingFour>145</HeadingFour>
          <StyledItemViewContentText as="p">$20.56</StyledItemViewContentText>
        </ItemViewPrice>
        {button}
        <StyledItemViewContentText as="sub">$20.56</StyledItemViewContentText>
        {/* Check other buy conditions here */}
        <ItemViewTab>
          <ItemViewTab.TabPane key="1" tab="About Creator">
            {description}
          </ItemViewTab.TabPane>
          <ItemViewTab.TabPane key="2" tab="Item Activity">
            {data ? (
              <Table
                dataSource={logs
                  .filter(
                    ({ decoded }) => decoded?.name.toLowerCase() === "transfer"
                  )
                  .map(({ block_signed_at, decoded }) => ({
                    from: truncateAddress(decoded.params[0].value ?? ""),
                    to: truncateAddress(decoded.params[1].value ?? ""),
                    time: block_signed_at?.substring(0, 10),
                    event: decoded.name,
                  }))}
                columns={columns as ColumnsType<object>}
                loading={isLoading}
              />
            ) : null}
          </ItemViewTab.TabPane>
        </ItemViewTab>
      </StyledItemViewContent>
    </StyledItemView>
  );
};

export default ItemView;
