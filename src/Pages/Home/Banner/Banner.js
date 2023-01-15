import React from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  return (
    <div>
      
      <div
        
        class="rdd hero min-h-screen "
      >
        <div class="hero-overlay bg-base-100 bg-opacity-50"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md my_dark:text-[#BDCAEF]">
            <h1 class="mb-5 text-5xl font-bold">MY DEWALT</h1>
            <p class="mb-5">
            Join MyDEWALT to register your tools and help protect your investment, rate and review products you love, and learn about the newest DEWALT tools and accessories.
            </p>
            <Link to={"/shop"} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-md px-5 py-2.5 text-center mr-2 mb-2 text-lg uppercase">Shop Now</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
