import React from 'react';
import Banner from '../../Share/Banner/Banner';
import NavBar from '../../Share/Nevation/NavBar';
import CarouselSlider from '../Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
        </div>
    );
};

export default Home;