import React from 'react'
import { useState, useEffect } from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import  headerImg  from '../assets/images/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



const Banner = () => {

    const[loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate=['Electronics Engineer', 'FrontEnd Developer', 'AI Enthusiast', 'Linux Nerd'];
    const[text,setText]= useState('');
    const [delta,setDelta]= useState(200- Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

    const tick = () => {
        let i =  loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting  &&  updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-item-center'>
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hello I'm Er. Samrat.`}  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " Electronics Engineer", " FrontEnd Developer", " AI Enthusiast", " Linux Nerd" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Are you looking for a personable and passionate technology enthusiast with a solid foundation in information technology? Look no further! With two years of hands-on experience and a fresh perspective on the latest developments, I am eager to leverage my technical skills to take my career to new heights.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
                <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default Banner
