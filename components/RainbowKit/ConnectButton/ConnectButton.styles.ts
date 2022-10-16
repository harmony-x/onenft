import { FlexibleDiv } from "$components/Box/Box.styles";
import styled from "styled-components";

export const ChainButton = styled(FlexibleDiv)`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: rgba(255, 255, 255, 0.67);
  padding: 14px 22px;
  border: 1px solid #b7b7bd;
  border-radius: 40px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-radius: 10px;
  }
`;
