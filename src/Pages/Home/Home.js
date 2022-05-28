import React from 'react';
import Banner from './Banner/Banner';
import Statistic from './Statistic/Statistic';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import Review from '../Dashboard/Review';
import UserRvw from './UserReviews/UserRvw/UserRvw';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Products></Products>
            <Hero></Hero>
            <Statistic></Statistic>
            <UserRvw></UserRvw>
        </div>
    );
};

export default Home;