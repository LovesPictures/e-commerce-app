import React, { useEffect, useState } from "react";
import { Card } from "../Card/Cards";

// test data
// import { productData } from "./productData";

/* 
jsonbin
hover over price info 
upload product card 

*/

export const Products = async () => {
  const getProductData = async () => {
    try {
      const data = await fetch("#");
      const json = await data.json();
      return json;
    } catch (error) {
      console.log("Type of error:", error);
    }
  };

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductData();
      setProductData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="Products">
      <h2 className="Section__header">Products</h2>
      <div className="Section__Container">
        {productData.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};


