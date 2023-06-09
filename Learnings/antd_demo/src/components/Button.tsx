import React from "react";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface ButtonType {
  label: string;
  type: "primary" | "default";
  loading: boolean;
  size: SizeType;
  htmlType: "button" | "submit" | "reset" | undefined;
}

function AntDButton({ label, type, loading, size, htmlType }: ButtonType) {
  return (
    <Button type={type} loading={loading} size={size} htmlType={htmlType}>
      {label}
    </Button>
  );
}

export default AntDButton;
