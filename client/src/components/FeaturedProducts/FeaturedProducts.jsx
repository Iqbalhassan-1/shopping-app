import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis veniam reprehenderit! Suscipit commodi, doloremque enim
          mollitia a nostrum accusantium ab quam blanditiis tenetur temporibus
          modi tempora deserunt impedit atque!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something worng !"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
