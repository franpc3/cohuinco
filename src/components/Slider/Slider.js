import React from 'react'
import { Carousel, Image } from 'react-bootstrap';
import firstImage from '../Images/1.jpg';
import secondImage from '../Images/2.jpg';
import thirdmage from '../Images/3.jpg';
import fourImage from '../Images/4.jpg';
import logo from '../Images/logo.png';
import './Slider.css';

export default function Slider() {
    return (
        <>
            <Image
                    fluid
                    alt="logo"
                    src={logo}
                    className="logo"
                />
            <Carousel>
                <Carousel.Item>
                    <Image
                        fluid
                        className="d-block w-100 sideSlide"
                        src={firstImage}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        fluid
                        className="d-block w-100 sideSlide"
                        src={secondImage}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        fluid
                        className="d-block w-100 sideSlide"
                        src={thirdmage}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 sideSlide"
                        src={fourImage}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
