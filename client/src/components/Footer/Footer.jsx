import React from "react";
import './footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis est
            repudiandae possimus ex itaque repellendus repellat magni magnam,
            odio ducimus tenetur, velit eum dolor. Pariatur facilis maxime
            explicabo nobis rerum.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis est
            repudiandae possimus ex itaque repellendus repellat magni magnam,
            odio ducimus tenetur, velit eum dolor. Pariatur facilis maxime
            explicabo nobis rerum.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Reactstore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
