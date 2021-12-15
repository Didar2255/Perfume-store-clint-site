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
        <div className='my-4 carousel'>
            <Slider {...settings}>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic1} alt="" className='img-fluid' />
                            <div className="box-content " >
                                <h5>The Gussi</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img" >
                        <a href="/">
                            <img src={pic2} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>Chanel</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic3} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>Mqueen</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic4} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>Parada</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic5} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>Fearless</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic6} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>The Roja</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic7} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>Tom & Marle</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='category-wrap'>
                    <div className="carousel-img">
                        <a href="/">
                            <img src={pic8} alt="" className='img-fluid' />
                            <div className="box-content">
                                <h5>Men osn</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CarouselSlider;