import { Button } from "$components/App/Button/Button.styles";
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
