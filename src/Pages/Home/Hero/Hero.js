import {
  BadgeCheckIcon,
  ShieldCheckIcon,
  UploadIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import hero from "../../../Assets/hero.jpg";
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <div className="hero pt-10 pb-20 border-b border-neutral bg-base-200">
        <div className="hero-content m-0 flex-col lg:flex-row">
          <div className="indicator">
            <div className="indicator-item mdd indicator-top lg:indicator-middle  mr-20 mt-8 lg:mt-36 ">
              <div className="lg:card-side bg-base-200 shadow-sm shadow-primary">
                <div className="card-body">
                  <h2 className="text-4xl font-bold text-center">32+</h2>
                  <p className="text-center font-medium">Years Experience</p>
                </div>
              </div>
            </div>
            <img
              src={hero}
              className="lg:mx-8 lg:max-w-lg lg:w-96 w-80 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:mx-20">
            <h1 className="text-4xl font-bold">Who We Are !</h1>
            <p className="py-6">
              We are working for your best tools. Which are suits your
              personality. You find best and qualityful tools from us.
            </p>
            <h1 className="text-3xl font-semibold flex">
              <BadgeCheckIcon className="h-10 w-10 text-primary"></BadgeCheckIcon>{" "}
              Trusted Tools Items
            </h1>
            <p className="py-6">
              Our every tools items are very qualitiful. We give guarantee
              for every tools
            </p>
            <h1 className="text-3xl font-semibold flex">
              <UsersIcon className="h-10 w-10 text-primary"></UsersIcon>{" "}
              Professional Service
            </h1>
            <p className="py-6">
              Our every tools items are very qualitiful. We give guarantee
              for every tools
            </p>
            <h1 className="text-3xl font-semibold flex">
              <ShieldCheckIcon className="h-10 w-10 text-primary"></ShieldCheckIcon>{" "}
              100% Safe Transaction
            </h1>
            <p className="py-6">
              Our every tools items are very qualitiful. We give guarantee
              for every tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
