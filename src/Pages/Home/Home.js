import React from 'react';
import Banner from './Banner/Banner';
import Statistic from './Statistic/Statistic';
import Hero from './Hero/Hero';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Products></Products>
            <Hero></Hero>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;