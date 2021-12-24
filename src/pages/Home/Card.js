import React from "react";
import PrimartyCta from "../../components/StyledComponent/PrimaryCTA";
import { useNavigate } from "react-router-dom";
import baby from "../../static/images/category/baby.png";
import "./Style.scss";
export default function Card({ index, data, img }) {
  const navigate = useNavigate();
  console.log("Image", img);
  return (
    <div
      className="catogery-card"
      style={{ flexDirection: index % 2 === 0 && "row-reverse" }}
    >
      <div className="div1">
        <h1>{data?.name}</h1>
        <p>{data?.description}</p>
        <PrimartyCta onClick={() => navigate(`products/${data.id}`)}>
          {data?.key}
        </PrimartyCta>
      </div>
      <div className="div2">
        <img src={img} alt="not found" />
        {/* <img src="../../static/images/category/baby.png" alt="not found" /> */}
      </div>
    </div>
  );
}
