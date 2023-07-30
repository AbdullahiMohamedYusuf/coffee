import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";

function Product(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container3" data-aos="fade-down" data-aos-delay="500">
      <div id="product-hold">
        <img
          id="product"
          src="https://o.remove.bg/downloads/98221e2d-2ef9-4a93-bafa-df3abcf7b98a/flat-white-3402c4f-removebg-preview.png"
          alt=""
        />
        <h2>{props.name}</h2>
        <div className="st">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h5>${props.price}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil qui eaque magni cum at porro. Enim, libero illum? Beatae!</p>
      </div>
    </div>
  );
}

export default Product;
