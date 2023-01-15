import React from 'react';
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Product from './Product/Product';

const PRD = () => {
    const { data: products, isLoading } = useQuery(["productsCourse"], () =>
    fetch(`https://manufacturer-website-g1e2.onrender.com/products`).then((res) =>
      res.json()
    )
  );
  if(isLoading){
    return <Loading></Loading>
  }
    return (
        <div className='border-b border-neutral'>
            <div className='text-center'>
                <h3 className='text-4xl py-16 font-bold uppercase'>LATEST PRODUCTS</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-8'>
                {
                    products?.slice(0).reverse().slice(0,3).map(product =><Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='text-center my-16'><Link to={'/shop'} class="btn btn-primary btn-outline btn-wide">Shop Now</Link></div>
        </div>
    );
};

export default PRD;