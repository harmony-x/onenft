import { ModalProps } from "antd";
import { ReactNode } from "react";

export type IModalProps = ModalProps & {
  children: ReactNode;
  heading: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
