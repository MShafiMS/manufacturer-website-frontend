import {
  BadgeCheckIcon,
  ShieldCheckIcon,
  UploadIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import hero from "../../../Assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="indicator">
            <div className="indicator-item indicator-middle mr-20 mt-36">
              <div className="card lg:card-side bg-violet-900 shadow-lg shadow-violet-900/60 ">
                <div className="card-body">
                  <h2 className="text-4xl font-bold text-center text-white">32+</h2>
                  <p className="text-center font-medium text-white">Years Experience</p>
                </div>
              </div>
            </div>
            <img
              src={hero}
              className="lg:mx-8 lg:max-w-lg rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:mx-20">
            <h1 className="text-5xl font-bold">Who We Are !</h1>
            <p className="py-6">
              We are working for your loveable furnitures. Which are suits your
              personality. You find best and qualityful furniture from us.
            </p>
            <h1 className="text-3xl font-semibold flex">
              <BadgeCheckIcon className="h-10 w-10 text-primary"></BadgeCheckIcon>{" "}
              Trusted Furniture Items
            </h1>
            <p className="py-6">
              Our every furniture items are very qualitiful. We give guarantee
              for every furniture
            </p>
            <h1 className="text-3xl font-semibold flex">
              <UsersIcon className="h-10 w-10 text-primary"></UsersIcon>{" "}
              Professional Service
            </h1>
            <p className="py-6">
              Our every furniture items are very qualitiful. We give guarantee
              for every furniture
            </p>
            <h1 className="text-3xl font-semibold flex">
              <ShieldCheckIcon className="h-10 w-10 text-primary"></ShieldCheckIcon>{" "}
              100% Safe Transaction
            </h1>
            <p className="py-6">
              Our every furniture items are very qualitiful. We give guarantee
              for every furniture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
