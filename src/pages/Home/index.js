import React from "react";
import catogeries from "./../../server/categories/index.get.json";
import Card from "./Card";
import baby from "../../static/images/category/baby.png";
export default function Home() {
  return (
    <div className="home">
      <div className="catogery-container">
        {catogeries?.map((data, index) => (
          <Card
            index={index}
            data={data}
            key={data?.id}
            img={"https://picsum.photos/100/150"}
          />
        ))}
      </div>
    </div>
  );
}
