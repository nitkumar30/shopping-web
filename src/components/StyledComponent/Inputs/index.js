import React from "react";
import "./Style.scss";

export default function Input({ title, ...rest }) {
  return (
    <div className="styled-input">
      <p>{title}</p>
      <input {...rest} />
    </div>
  );
}
