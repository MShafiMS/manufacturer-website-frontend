import {
  BadgeCheckIcon,
  ShieldCheckIcon,
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
          <img src={hero} className="lg:mx-8 lg:max-w-lg rounded-lg shadow-2xl" />
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
            <h1 className="text-3xl font-semibold flex"><UsersIcon className="h-10 w-10 text-primary"></UsersIcon> Professional Service</h1>
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
