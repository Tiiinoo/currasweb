import React, { useEffect } from "react";
import "./itemDetail.css";
import { useParams } from "react-router-dom";
import { ClothesData } from "../clothesData";

export const ItemDetail = () => {
  const [itemList, setItemList] = useEffect([]);
  const { id } = useParams();

  const items = ClothesData.filter((item) => {
    return item.alt == id;
  });
  console.log(items);
  setItemList(items);

  return (
    <>
      <div>
        <img src={itemList.image} alt={itemList.alt} />
      </div>
      <div>
        <p>{items.description}</p>
      </div>
    </>
  );
};
