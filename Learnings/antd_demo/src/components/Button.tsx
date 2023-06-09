import React from "react";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface ButtonType {
  label: string;
  type: "primary" | "default";
  loading?: boolean;
  size?: SizeType;
  htmlType?: "button" | "submit" | "reset" | undefined;
  icon?: any;
  onClick?:
    | (React.MouseEventHandler<HTMLAnchorElement> &
        React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
}

function AntDButton({
  label,
  type,
  loading,
  size,
  htmlType,
  icon,
  onClick,
}: ButtonType) {
  return (
    <Button
      type={type}
      loading={loading}
      size={size}
      htmlType={htmlType}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  );
}

export default AntDButton;
