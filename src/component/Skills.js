import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from '../assets/images/icons8-html.svg';
import css from '../assets/images/icons8-css.svg';
import js from '../assets/images/javascript.svg';
import python from '../assets/images/python.svg';
import react from '../assets/images/react.svg';
import machine from '../assets/images/ml.svg';
import linux from '../assets/images/linux.svg';
import window from '../assets/images/windows.svg';


import c from '../assets/images/icons8-c++.svg';





import colorsharp from '../assets/images/color-sharp.png';
// import arrow1 from "../assets/images/arrow1.svg";
// import arrow2 from "../assets/images/arrow2.svg";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <div className='skill-bx wow zoomIn'>
                    <h2>Skills</h2>
                    <p>I am experienced with and possess some skillset on these feilds of technologies</p>
                    <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                        <div className='item'>
                            <img src={html} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={css} alt="Image" />
                            <h5>CSS</h5>
                        </div><div className='item'>
                            <img src={js} alt="Image" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                            <img src={react} alt="Image" />
                            <h5>ReactJs</h5>
                        </div>
                        <div className='item'>
                            <img src={python} alt="Image" />
                            <h5>Python / Django</h5>
                        </div>
                        <div className='item'>
                            <img src={c} alt="Image" />
                            <h5>Conceptual Programming</h5>
                        </div>
                        <div className='item'>
                            <img src={machine} alt="Image" />
                            <h5>Machine Learning</h5>
                        </div>
                        <div className='item'>
                            <img src={linux} alt="Image" />
                            <h5>Linux</h5>
                        </div>
                        <div className='item'>
                            <img src={window} alt="Image" />
                            <h5>Window</h5>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
      <img src={colorsharp} className='background-image-left' alt='Image'/> 
    </section>
  )
}

export default Skills
