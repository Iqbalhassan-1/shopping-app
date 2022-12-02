import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
const FeaturedProducts = ({ type }) => {

  const [data, SetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          // here all data call and also filter featured and trending products with help of strapi query 
          process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        SetData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
