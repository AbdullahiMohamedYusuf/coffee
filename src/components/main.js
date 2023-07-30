import React, { useEffect } from "react";
import AOS from "aos";
import Product from "./product";

import "../index.css";
function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  const item = [
    {
      name: "cappuccino",
      price: 5.99,
    },
    {
      name: "Coffee",
      price: 5.99,
    },
  ];
  return (
    <div id="main">
      <main>
        <div className="content">
          <div
            className="imageContainer"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div
            className="text"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h5>About</h5>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              at quos earum fugit sunt accusantium dolores provident
              voluptatibus cupiditate quo sit ducimus blanditiis esse
              laboriosam, libero dolore quam tenetur quae doloremque laudantium
              rerum? Officia velit quibusdam ducimus laboriosam nisi enim.
            </p>
          </div>
        </div>
      </main>
      <div className="contain">
        {item.map((item) => (
          <Product name={item.name} price={item.price} key={item.name} />
        ))}
      </div>
      <div className="about">
        <div className="contain2">
          <div className="about-information">
            <h1>NICE TO MEET YOU.</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eveniet praesentium ipsam sint. Blanditiis laboriosam ratione
              voluptate, fuga mollitia maxime. Ipsum dolor, unde eos facilis
              veritatis, doloribus neque quae iure dolores odio porro,
              repellendus illo suscipit eveniet officia laborum? Quibusdam saepe
              fugit sequi aliquid quod molestias adipisci architecto labore eos
              consequuntur veritatis repellendus consectetur iste, fuga, est
              atque corporis? Officia!
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/17661136/pexels-photo-17661136/free-photo-of-stad-byggnader-kust-resa.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
