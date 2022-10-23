import { Button } from "$components/App/Button/Button.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { BREAKPOINTS } from "$constants/breakpoints";
import styled from "styled-components";

export const CreateLayout = styled.section`
  padding: 31px 0 31px 0;
  @media screen and (${BREAKPOINTS.sm}) {
    padding: 60px 0 60px 0;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 93px 0 83px 0;
  }
`;

export const CreateItemButton = styled(Button)`
  max-width: 522px;
  width: 100%;
`;

export const MyCollectionsButton = styled(Button)`
  max-width: 371px;
  width: 100%;
  margin-bottom: 50px;
  @media screen and (${BREAKPOINTS.lg}) {
    margin-bottom: 80px;
  }
`;

export const EmptyCollections = styled(FlexibleDiv)`
  border: 2px solid #3d405c;
  border-radius: 10px;
  height: 349px;
`;
