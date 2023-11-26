import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderImageUrl = [
    //First image url
    {
        url: require('../../assest/img/colombo.png')
    },
    {
        url: require('../../assest/img/colombo.png')
    },
    {
        url: require('../../assest/img/colombo.png')
    },
    {
        url: require('../../assest/img/colombo.png')
    },
    {
        url: require('../../assest/img/colombo.png')
    },
    {
        url: require('../../assest/img/colombo.png')
    },

];
const FareContainer = () => {
    return (
        <div className="container">
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="parent fare_container">
                    <Carousel
                        responsive={responsive}
                        autoPlay={false}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        infinite={true}
                        partialVisible={false}
                        dotListClass="custom-dot-list-style"
                    >
                        {sliderImageUrl.map((imageUrl, index) => {
                            return (

                                <div className="slider" key={index}>
                                    <div className="slider_content">
                                        <img src={imageUrl.url} alt="movie" className="slider_img" />
                                        <div className="inner_slider content ">
                                            <div className="top_fare_heading">
                                                <h3>From Chennai MAA to colombo CMB </h3>
                                                <span className="fare-date">12/07/2023</span>
                                                <span className="fare-date">12/10/2023</span>
                                            </div>
                                            <div className="fare_section_mid pt-4">
                                                <span>From</span>
                                                <h3>INR 14,133</h3>
                                                <p>Seen: 23 hrs ago</p>
                                                <span className="trip">Round-trip/Economy</span>
                                            </div>
                                            <div className="fare_booknow_footer text-center mt-3 mb-3">
                                                <button type="button" className="btn btn-primary">Book now</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>

    );
};
export default FareContainer;
