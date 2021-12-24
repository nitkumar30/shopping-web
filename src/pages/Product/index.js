import React, { useEffect, useState } from "react";
import catogeries from "./../../server/categories/index.get.json";
import products from "./../../server/products/index.get.json";
import CatogeryList from "./CatogeryList";
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import "./Style.scss";
export default function Product() {
  const params = useParams();
  const [product, setProduct] = useState(products);
  const [selected, setSelected] = useState("");
  console.log("Parmas", params);

  useEffect(() => {
    console.log("hii");
    if (params?.id) {
      const filteredData = products.filter((e) => e.category === params.id);
      console.log("Filtered DAta", filteredData);
      setProduct(filteredData);
      setSelected(params.id);
    }
  }, [params]);

  const handleChangeCatogery = (id) => {
    const filteredData = products.filter((e) => e.category === id);
    setProduct(filteredData);
    setSelected(id);
  };
  return (
    <div className="products">
      <CatogeryList
        selected={selected}
        setSelected={(e) => handleChangeCatogery(e)}
        catogeries={catogeries}
      />
      <ProductList data={product} />
    </div>
  );
}
