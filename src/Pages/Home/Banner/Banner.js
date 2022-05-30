import React from "react";
import { Link } from "react-router-dom";
import b1 from "../../../Assets/Banner/b1.jpg";
import b2 from "../../../Assets/Banner/b2.jpg";
import b3 from "../../../Assets/Banner/b3.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div id="fdd" className=" carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={b1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={b2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={b3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div
        
        class="rdd md:hidden lg:hidden hero min-h-screen"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">MY DEWALT</h1>
            <p class="mb-5">
            Join MyDEWALT to register your tools and help protect your investment, rate and review products you love, and learn about the newest DEWALT tools and accessories.
            </p>
            <Link to={'/shop'} class="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
