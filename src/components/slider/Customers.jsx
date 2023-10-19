import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {iss, pwc, rhb, spar, mpact, deloitte} from "../../assets"


export default class Customers extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0
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
            <div className="mainContainer">
                <Slider {...settings}>
                    <div className="container">
                        <img src={mpact}  alt="mpact" className="md:w-[220px] sm:-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={deloitte} alt="Deloitte" className="md:w-[220px] sm:-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={rhb} alt="rbh" className="md:w-[220px] sm:-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={pwc} alt="pwc" className="md:w-[220px] sm:-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={spar} alt="spar" className="md:w-[220px] sm:-[150px]"/>
                    </div>
                    <div className="container">
                        <img src={iss} alt="ISS" className="md:w-[220px] sm:-[150px]"/>
                    </div>
                </Slider>
            </div>
        );
    }
}