import React from "react";
import CountUp from 'react-countup';
import { CheckCircleIcon, CubeIcon, UploadIcon, UsersIcon } from '@heroicons/react/solid'

const Statistic = () => {
  return (
    <div className="lg:py-16 bg-base-200 border-b border-neutral">
      <h1 className="font-bold text-center uppercase text-4xl mt-5 mb-4">WE DELIVERED PRODUCTS ALL OVER THE WORLD</h1>
      <p className="text-center font-medium mb-8 lg:mx-40">
        Furnitory is considered to be the Game Changer in furniture industry.
        Carefully-chosen raw material, environment-friendly business practice
        and customer-centric approach is what made Furnitory. Now Furnitory a
        beloved brand at home and abroad.
      </p>
      <div className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
        <div className="card lg:card-side rounded-md bg-base-100 border-solid border border-neutral hover:border-secondary">
          <div className="card-body">
            <UsersIcon className="h-10 w-10 ml-22 text-primary mx-auto"></UsersIcon>
            <h2 className="text-4xl font-bold text-center"><CountUp start={0} end={8000} duration={4} /></h2>
            <p className="text-center font-medium">Happy Customers</p>
          </div>
        </div>
        <div className="card lg:card-side rounded-md bg-base-100 border-solid border border-neutral hover:border-secondary">
          <div className="card-body">
            <CheckCircleIcon className="h-10 w-10 ml-22 text-primary mx-auto"></CheckCircleIcon>
            <h2 className="text-4xl font-bold text-center"><CountUp start={0} end={10800} duration={4} /></h2>
            <p className="text-center font-medium">Sold Out</p>
          </div>
        </div>
        <div className="card lg:card-side rounded-md bg-base-100 border-solid border border-neutral hover:border-secondary">
          <div className="card-body">
            <CubeIcon className="h-10 w-10 ml-22 text-primary mx-auto"></CubeIcon>
            <h2 className="text-4xl font-bold text-center"><CountUp start={0} end={30500} duration={4} /></h2>
            <p className="text-center font-medium">In Stock</p>
          </div>
        </div>
        <div className="card lg:card-side rounded-md bg-base-100 border-solid border border-neutral hover:border-secondary">
          <div className="card-body">
            <UploadIcon className="h-10 w-10 ml-22 text-primary mx-auto"></UploadIcon>
            <h2 className="text-4xl font-bold text-center"><CountUp start={0} end={1990} duration={4} /></h2>
            <p className="text-center font-medium">Since</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;


