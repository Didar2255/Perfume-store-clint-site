import React from 'react';
import Banner from '../../Share/Banner/Banner';
import NavBar from '../../Share/Nevation/NavBar';
import CarouselSlider from '../Carousel/Carousel';
import Products from '../Products/Products/Products';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <Products></Products>
            <Service></Service>
        </div>
    );
};

export default Home;