import React from 'react';
import { useState , useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg';
import icon1 from '../assets/images/nav-icon1.svg';
import icon2 from '../assets/images/nav-icon2.svg';
import icon3 from '../assets/images/nav-icon3.svg';




function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
 useEffect(()=>{
    const onScroll = () =>{
        if(window.scrollY>50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    window.addEventListener('scroll', onScroll);
 },[])

 const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
 }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
        <div className='social-icon'>
            <a href='#' ><img src={icon1} alt=''/></a>
            <a href='#' ><img src={icon2} alt=''/></a>
            <a href='#' ><img src={icon3} alt=''/></a>

        </div>
        <button onClick={()=>{
            console.log('connect')
        }}><span>Lets Connect</span></button>
        </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;