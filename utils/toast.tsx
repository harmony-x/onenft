import { Error } from "$svgs/error";
import { Shield } from "$svgs/shield";
import { message } from "antd";

const toast = (type: "success" | "error", text: string) => {
  if (type === "success") {
    message.success({
      content: text,
      className: "toast-success",
      icon: <Shield />,
      duration: 3,
    });
  }
  if (type === "error") {
    message.error({
      content: text,
      className: "toast-error",
      icon: <Error />,
      duration: 3,
    });
  }
};

export default toast;
