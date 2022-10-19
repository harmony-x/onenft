import { Button } from "$components/App/Button/Button.styles";
import CreatorDisplay from "$components/App/CreatorDisplay/CreatorDisplay";
import { Table } from "$components/App/Table/Table.styles";
import {
  HeadingFour,
  HeadingTwo,
} from "$components/App/Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { Harmony } from "$svgs/harmony";
import { activity } from "$utils/data";
import { ColumnsType } from "antd/lib/table";
import Image from "next/image";
import {
  ItemViewButton,
  ItemViewPrice,
  ItemViewTab,
  StyledItemView,
  StyledItemViewContent,
  StyledItemViewContentText,
  StyledItemViewImage,
} from "./ItemView.styles";

const ItemView = () => {
  const columns: ColumnsType<typeof activity[number]> = [
    {
      title: "Event",
      dataIndex: "event",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text) => (
        <ItemViewPrice
          className="small"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Harmony className="small" />
          {text}
        </ItemViewPrice>
      ),
    },
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
        <Image src="/primate.png" objectFit="cover" alt="" layout="fill" />
      </StyledItemViewImage>
      <StyledItemViewContent>
        <CreatorDisplay mb="14px" name="PrimatesXX" img="/primate.png" />
        <HeadingTwo mb="6px" as="h3">
          Primate #2679
        </HeadingTwo>
        <StyledItemViewContentText className="owner">
          Owned by <span className="span">DzaLiv</span>
        </StyledItemViewContentText>
        <StyledItemViewContentText mb="15px">
          Current price
        </StyledItemViewContentText>
        <ItemViewPrice justifyContent="flex-start">
          <Harmony />
          <HeadingFour>145</HeadingFour>
          <StyledItemViewContentText as="p">$20.56</StyledItemViewContentText>
        </ItemViewPrice>
        <ItemViewButton mb="46px">Buy now</ItemViewButton>
        <ItemViewTab>
          <ItemViewTab.TabPane key="1" tab="About Creator">
            Collection of 10,000 Primates facilitating a seamless adoption of
            the web3 space through community fueled ventures and collaborations.
          </ItemViewTab.TabPane>
          <ItemViewTab.TabPane key="2" tab="Item Activity">
            <Table
              dataSource={activity}
              columns={columns as ColumnsType<object>}
            />
          </ItemViewTab.TabPane>
        </ItemViewTab>
      </StyledItemViewContent>
    </StyledItemView>
  );
};

export default ItemView;
