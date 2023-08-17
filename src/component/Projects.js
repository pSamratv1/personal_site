import React from 'react';
import { Container, Tab, Row, Col, Nav} from 'react-bootstrap';
import projImg3 from "../assets/images/reacthooks-img.png";
import projImg2 from "../assets/images/Movieportal-2-img.png";
import projImg1 from "../assets/images/Portfolio-site-img.png";
import ProjectCards from './ProjectCards';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorsharp2 from '../assets/images/color-sharp2.png';

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Site",
            description: "Description about my skills and learning",
            imgUrl: projImg1,
            codeUrl:"https://github.com/CODE-SAMRAT/personal_site.git",
            

        },
        {
            title: "IMDB style portal",
            description: "All about Movies and Tv shows",
            imgUrl: projImg2,
            codeUrl:"https://github.com/CODE-SAMRAT/MovieInfoPortal.git",
        },
        {
            title: "Basics of React Hooks",
            description: "Real Life useage of React Hooks",
            imgUrl: projImg3,
            codeUrl:"https://github.com/CODE-SAMRAT/Reacthooks.git",
        },
        {
            title: "Portfolio Site",
            description: "Description about my skills and learning",
            imgUrl: projImg1,
            codeUrl:"https://github.com/CODE-SAMRAT/personal_site.git",

        },
        {
            title: "IMDB style portal",
            description: "All about Movies and Tv shows",
            imgUrl: projImg2,
            codeUrl:"https://github.com/CODE-SAMRAT/MovieInfoPortal.git",

        },
        {
            title: "Basics of React Hooks",
            description: "Real Life useage of React Hooks",
            imgUrl: projImg3,
            codeUrl:"https://github.com/CODE-SAMRAT/Reacthooks.git",

        },
    ]
  return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummytext for the printing and typesetting industry.</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tabs'>
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="sideInUp" className={isVisible ? "animate_animated animate_sideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return(
                                            <ProjectCards
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>

                    </Tab.Content>
                    </Tab.Container>
                    </div>}
                </TrackVisibility>
                </Col>
            </Row>
        </Container>
      <img className='background-image-right' src={colorsharp2} alt="background_image"/>
    </section>
  )
}

export default Projects
