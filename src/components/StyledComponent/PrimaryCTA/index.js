import React from "react";
import "./Style.scss";
export default function PrimartyCta({ children, ...rest }) {
  return (
    <button className="primary-cta" {...rest}>
      {children}
    </button>
  );
}
