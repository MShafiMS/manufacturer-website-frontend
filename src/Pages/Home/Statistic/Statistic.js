import React from "react";
import { CheckCircleIcon, CubeIcon, UploadIcon, UsersIcon } from '@heroicons/react/solid'

const Statistic = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-5xl mt-5 mb-4">Our Achivements</h1>
      <p className="text-center font-medium mb-4 lg:mb-20 lg:mx-40">
        Furnitory is considered to be the Game Changer in furniture industry.
        Carefully-chosen raw material, environment-friendly business practice
        and customer-centric approach is what made Furnitory. Now Furnitory a
        beloved brand at home and abroad.
      </p>
      <div className="grid grid-cols-1 mb-5 lg:grid-cols-4 gap-5 mx-5 lg:mb-28">
        <div className="card lg:card-side bg-base-100 border-solid border-2 border-primary hover:border-secondary">
          <div className="card-body">
            <UsersIcon className="h-10 w-10 ml-22 text-primary mx-auto"></UsersIcon>
            <h2 className="text-4xl font-bold text-center">10.3K</h2>
            <p className="text-center font-medium">Happy Customers</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 border-solid border-2 border-primary hover:border-secondary">
          <div className="card-body">
            <CheckCircleIcon className="h-10 w-10 ml-22 text-primary mx-auto"></CheckCircleIcon>
            <h2 className="text-4xl font-bold text-center">10.8K</h2>
            <p className="text-center font-medium">Sold Out</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 border-solid border-2 border-primary hover:border-secondary">
          <div className="card-body">
            <CubeIcon className="h-10 w-10 ml-22 text-primary mx-auto"></CubeIcon>
            <h2 className="text-4xl font-bold text-center">30.5K</h2>
            <p className="text-center font-medium">In Stock</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 border-solid border-2 border-primary hover:border-secondary">
          <div className="card-body">
            <UploadIcon className="h-10 w-10 ml-22 text-primary mx-auto"></UploadIcon>
            <h2 className="text-4xl font-bold text-center">1990</h2>
            <p className="text-center font-medium">Since</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;


