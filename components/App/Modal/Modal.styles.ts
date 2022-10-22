import { BREAKPOINTS } from "$constants/breakpoints";
import { Modal } from "antd";
import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100%;
  padding: 22px 26px;
  border-radius: 30px;
  background-color: #2d2f43;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  pointer-events: auto;
  svg.modal {
    width: 30px;
    height: 30px;
  }
  @media screen and (${BREAKPOINTS.md}) {
    padding: 32px 36px;
  }
  @media screen and (${BREAKPOINTS.lg}) {
    padding: 42px 56px;
    svg.modal {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledModalBody = styled.div`
  margin-top: 50px;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-centered .ant-modal {
    width: 90%;
    max-width: 736px;
  }
`;
