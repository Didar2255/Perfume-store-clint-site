import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from '../../image/1.png'
import pic2 from '../../image/2.png'
import pic3 from '../../image/3.png'
import pic4 from '../../image/4.png'
import pic5 from '../../image/5.png'
import pic6 from '../../image/6.jpg'
import pic7 from '../../image/7.png'
import pic8 from '../../image/8.jpg'
import './Carousel.css'


const CarouselSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='my-4'>
            <Slider {...settings}>
                <div className='carousel-img'>
                    <img src={pic1} alt="" />
                </div>
                <div className='carousel-img'>
                    <img src={pic2} alt="" />
                </div>
                <div className='carousel-img'>
                    <img src={pic3} alt="" />
                </div>
                <div className='carousel-img'>
                    <img src={pic4} alt="" />
                </div >
                <div className='carousel-img'>
                    <img src={pic5} alt="" />
                </div>
                <div className='carousel-img'>
                    <img src={pic6} alt="" />
                </div>
                <div className='carousel-img'>
                    <img src={pic7} alt="" />
                </div>
                <div className='carousel-img'>
                    <img src={pic8} alt="" />
                </div>
            </Slider>

        </div>
    );
};

export default CarouselSlider;