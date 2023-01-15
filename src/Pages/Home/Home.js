import Banner from './Banner/Banner';
import Statistic from './Statistic/Statistic';
import Hero from './Hero/Hero';
import UserRvw from './UserReviews/UserRvw/UserRvw';
import Contact from './Contact/Contact';
import PRD from './PRD';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Statistic></Statistic>
            <PRD></PRD>
            <Hero></Hero>
            <UserRvw></UserRvw>
            <Contact></Contact>
        </div>
    );
};

export default Home;