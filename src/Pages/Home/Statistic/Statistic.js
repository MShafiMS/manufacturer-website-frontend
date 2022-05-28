import React from "react";
import { CheckCircleIcon, DatabaseIcon, UploadIcon, UsersIcon } from '@heroicons/react/solid'

const Statistic = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-5xl mt-5 lg:mt-28 mb-4">Our Achivements</h1>
      <p className="text-center text-warning font-medium mb-4 lg:mb-20 lg:mx-40">
        Furnitory is considered to be the Game Changer in furniture industry.
        Carefully-chosen raw material, environment-friendly business practice
        and customer-centric approach is what made Furnitory. Now Furnitory a
        beloved brand at home and abroad.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-5 lg:mb-28">
        <div class="card lg:card-side bg-base-100 border-solid border-2 border-success hover:border-primary">
          <div class="card-body">
            <UsersIcon className="h-10 w-10 ml-22 text-primary mx-auto"></UsersIcon>
            <h2 class="text-4xl font-bold text-center">10.3K</h2>
            <p className="text-center font-medium">Happy Customers</p>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 border-solid border-2 border-success hover:border-primary">
          <div class="card-body">
            <CheckCircleIcon className="h-10 w-10 ml-22 text-primary mx-auto"></CheckCircleIcon>
            <h2 class="text-4xl font-bold text-center">10.8K</h2>
            <p className="text-center font-medium">Sold Out</p>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 border-solid border-2 border-success hover:border-primary">
          <div class="card-body">
            <DatabaseIcon className="h-10 w-10 ml-22 text-primary mx-auto"></DatabaseIcon>
            <h2 class="text-4xl font-bold text-center">30.5K</h2>
            <p className="text-center font-medium">In Stock</p>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 border-solid border-2 border-success hover:border-primary">
          <div class="card-body">
            <UploadIcon className="h-10 w-10 ml-22 text-primary mx-auto"></UploadIcon>
            <h2 class="text-4xl font-bold text-center">1990</h2>
            <p className="text-center font-medium">Since</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;


