import { FC } from "react";
import { Modal as AntdModal } from "antd";
import { IModalProps } from "./Modal.types";
import {
  StyledModal,
  StyledModalBody,
  StyledModalContainer,
} from "./Modal.styles";
import { HeadingTwo } from "../Typography/Typography.styles";
import { FlexibleDiv } from "$components/Box/Box.styles";
import { CircledClose } from "$svgs/circled-close";

const Modal: FC<IModalProps> = ({
  children,
  heading,
  modalOpen,
  setModalOpen,
  ...rest
}) => {
  return (
    <StyledModal
      title="Vertically centered modal dialog"
      centered
      visible={modalOpen}
      onCancel={() => setModalOpen(false)}
      modalRender={() => (
        <StyledModalContainer>
          <FlexibleDiv
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <HeadingTwo>{heading}</HeadingTwo>
            <button onClick={() => setModalOpen(false)}>
              <CircledClose className="modal" />
            </button>
          </FlexibleDiv>
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModalContainer>
      )}
      {...rest}
      // okButtonProps
    />
  );
};

export default Modal;
