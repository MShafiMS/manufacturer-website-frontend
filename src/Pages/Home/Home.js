import React from 'react';
import Banner from './Banner/Banner';
import Statistic from './Statistic/Statistic';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import Review from '../Dashboard/Review';
import UserRvw from './UserReviews/UserRvw/UserRvw';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='mx-4'>
            <Products></Products>
            <Hero></Hero>
            <Statistic></Statistic>
            <UserRvw></UserRvw>
            <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;