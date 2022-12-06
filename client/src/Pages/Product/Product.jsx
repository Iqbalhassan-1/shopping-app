import React from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
  const id =useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setquantity] = useState(1);
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );
  const dispatch=useDispatch()
  console.log(id);
  return (
    <div className="product">
      {
        loading ? ("loading"):(<>

      
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes.img?.data.attributes.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes.img2?.data.attributes.url} alt="" onClick={(e) => setSelectedImg("img2")} />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>
         {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button
            onClick={() => setquantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setquantity((prev) => prev + 1)}> +</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity

        }))}>
          <ShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO CAMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr style={{width:'100%',border:'1px solid rgb(238, 237, 237)'}}/>
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
          </>)
          }
      </div>
  );
};

export default Product;
