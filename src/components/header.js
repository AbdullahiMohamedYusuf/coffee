import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import AOS from "aos";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-in"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <header>
        <nav>
          <div className="container">
            <h1>RIGHT</h1>
            <ul>
              <Link id="home">Home</Link>
              <Link id="About">About</Link>
              <Link id="Menu">Menu</Link>
              <Link id="Events">Events</Link>
              <Link id="buy">Buy Now</Link>
            </ul>
          </div>
          <div className="discover">
            <h4>Start Your Day Right.</h4>
            <h1>Discover the taste of real Coffe</h1>
            <button>Contact</button>
          </div>
          <div className="container2">
            <div className="beans">
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="locations">
                Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
