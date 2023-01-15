import React from "react";
import { useQuery } from "react-query";
import Loading from '../../Shared/Loading';
import Product from "../Product/Product";

const Products = () => {
  const { data: products, isLoading } = useQuery(["productsCourse"], () =>
    fetch(`https://manufacturer-website-g1e2.onrender.com/products`).then((res) =>
      res.json()
    )
  );
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="mb-28 mt-12">
      <div className="text-center">
        <h3 className="text-5xl mb-16 font-bold uppercase">Our Products</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-8">
        {products.slice(0).reverse().map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
