import React from 'react'
import './Customar_Slider.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Customar_Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:<IoArrowForwardCircleOutline />,
        nextArrow:<IoArrowBackCircleOutline />,
      };

  return (
    <>
    <section className='Customar_Slider'>
        <div className="container">
            <div className="Jui_Slider">
                <div className="main_part">
                    <div className="Slider_text">
                        <h1>Trusted by Thousands of Happy Customer</h1>
                        <p>These are the stories of our customers who have joined us with great
                             pleasure when using this crazy feature.
                        </p>
                    </div>
                    <div className="main_slider">
                        <div className="slider-container mySlider">
                            <Slider {...settings} className='main'>
                                <div >

                                <div className='Slide_1'>
                                    <div className="slide_up">
                                        <div className="slide">
                                            <img src="imge/man1.png" alt="profile" />
                                            <div className="slide_text">
                                                <div className="text">
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                                </div>
                                                <div className="ss">
                                                    <h3>4.5</h3> 
                                                    <FaStar  className='icon'/>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="comments">
                                                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.
                                                    LaslesVPN always the best”.
                                                </p>
                                            </div>
                                    </div>
                                </div>
                                </div>
                                <div >
                                    <div className='Slide_1 '>
                                        <div className="slide_up">
                                            <div className="slide">
                                                <img src="imge/ss.png" alt="profile" />
                                                <div className="slide_text SONE">
                                                    <div className="text text_one">
                                                        <h2>Yessica Christyt</h2>
                                                        <p>Shanxi, China</p>
                                                    </div>
                                                    <div className="ss">
                                                        <h3>4.5</h3> 
                                                        <FaStar  className='icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="comments one">
                                                    <p>“I like it because I like to travel far and still can connect |
                                                        with high speed.”.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className='Slide_1'>
                                        <div className="slide_up">
                                            <div className="slide">
                                                <img src="imge/bb.png" alt="profile" />
                                                <div className="slide_text SONE2">
                                                    <div className="text text_one">
                                                        <h2>Kim Young Jou</h2>
                                                        <p>Seoul, South Korea</p>
                                                    </div>
                                                    <div className="ss">
                                                        <h3>4.5</h3> 
                                                        <FaStar  className='icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="comments tow">
                                                    <p>“This is very unusual for my business that currently requires a virtual 
                                                        private network that has high security.”.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className='Slide_1'>
                                    <div className="slide_up">
                                        <div className="slide">
                                            <img src="imge/man1.png" alt="profile" />
                                            <div className="slide_text">
                                                <div className="text">
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                                </div>
                                                <div className="ss">
                                                    <h3>4.5</h3> 
                                                    <FaStar  className='icon'/>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="comments">
                                                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.
                                                    LaslesVPN always the best”.
                                                </p>
                                            </div>
                                    </div>
                                </div>
                                </div>
                                <div>
                                <div className='Slide_1 '>
                                        <div className="slide_up">
                                            <div className="slide">
                                                <img src="imge/ss.png" alt="profile" />
                                                <div className="slide_text SONE">
                                                    <div className="text text_one">
                                                        <h2>Yessica Christyt</h2>
                                                        <p>Shanxi, China</p>
                                                    </div>
                                                    <div className="ss">
                                                        <h3>4.5</h3> 
                                                        <FaStar  className='icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="comments one">
                                                    <p>“I like it because I like to travel far and still can connect |
                                                        with high speed.”.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className='Slide_1'>
                                        <div className="slide_up">
                                            <div className="slide">
                                                <img src="imge/bb.png" alt="profile" />
                                                <div className="slide_text SONE2">
                                                    <div className="text text_one">
                                                        <h2>Kim Young Jou</h2>
                                                        <p>Seoul, South Korea</p>
                                                    </div>
                                                    <div className="ss">
                                                        <h3>4.5</h3> 
                                                        <FaStar  className='icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="comments tow">
                                                    <p>“This is very unusual for my business that currently requires a virtual 
                                                        private network that has high security.”.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className='Slide_1'>
                                    <div className="slide_up">
                                        <div className="slide">
                                            <img src="imge/man1.png" alt="profile" />
                                            <div className="slide_text">
                                                <div className="text">
                                                <h2>Viezh Robert</h2>
                                                <p>Warsaw, Poland</p>
                                                </div>
                                                <div className="ss">
                                                    <h3>4.5</h3> 
                                                    <FaStar  className='icon'/>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="comments">
                                                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.
                                                    LaslesVPN always the best”.
                                                </p>
                                            </div>
                                    </div>
                                </div>
                                </div>
                                <div>
                                <div className='Slide_1 '>
                                        <div className="slide_up">
                                            <div className="slide">
                                                <img src="imge/ss.png" alt="profile" />
                                                <div className="slide_text SONE">
                                                    <div className="text text_one">
                                                        <h2>Yessica Christyt</h2>
                                                        <p>Shanxi, China</p>
                                                    </div>
                                                    <div className="ss">
                                                        <h3>4.5</h3> 
                                                        <FaStar  className='icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="comments one">
                                                    <p>“I like it because I like to travel far and still can connect |
                                                        with high speed.”.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className='Slide_1'>
                                        <div className="slide_up">
                                            <div className="slide">
                                                <img src="imge/bb.png" alt="profile" />
                                                <div className="slide_text SONE2">
                                                    <div className="text text_one">
                                                        <h2>Kim Young Jou</h2>
                                                        <p>Seoul, South Korea</p>
                                                    </div>
                                                    <div className="ss">
                                                        <h3>4.5</h3> 
                                                        <FaStar  className='icon'/>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="comments tow">
                                                    <p>“This is very unusual for my business that currently requires a virtual 
                                                        private network that has high security.”.
                                                    </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Customar_Slider