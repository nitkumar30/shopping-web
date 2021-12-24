import React from "react";

export default function CatogeryList({ selected, setSelected, catogeries }) {
  return (
    <div className="catogery-list">
      {catogeries?.map((data, index) => (
        <div
          onClick={() => setSelected(data?.id)}
          id={selected === data?.id && "selected-catogey-card"}
          className="catogery-list-card"
          key={data?.id}
        >
          {data.name}
        </div>
      ))}
    </div>
  );
}
