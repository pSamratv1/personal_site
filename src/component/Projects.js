import React from 'react';
import { Container, Tab, Row, Col, Nav} from 'react-bootstrap';
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import ProjectCards from './ProjectCards';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorsharp2 from '../assets/images/color-sharp2.png';

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design and Development",
            imgUrl: projImg3,
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
      <img className='background-image-right' src={colorsharp2} />
    </section>
  )
}

export default Projects
