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
import { applyEllipsis, truncateAddress } from "$utils/functions";
import { ColumnsType } from "antd/lib/table";
import Image from "next/image";
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
  const { data, isLoading, isSuccess } = useQuery(
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

  return (
    <StyledItemView
      as="section"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <StyledItemViewImage>
        <Image src={itemImage} objectFit="cover" alt="" layout="fill" />
      </StyledItemViewImage>
      <StyledItemViewContent>
        <CreatorDisplay mb="14px" name={creatorName} img="/primate.png" />
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
