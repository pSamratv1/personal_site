/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm'
import Logo from "../assets/images/logo.svg"
import icon1 from '../assets/images/nav-icon1.svg';
import icon2 from '../assets/images/nav-icon2.svg';
import icon3 from '../assets/images/nav-icon3.svg';


const Footer = () => {
  return (
    <footer className='footer'>
    <Container>
      <Row className="align-item-center">ç
        <MailChimpForm />
        <Col size={40} sm={6}>
            <img size={40}src={Logo} alt='logo'/>
            </Col> 
            <Col size={12} sm={6} className="text-center text-sm-end">
            <div className='social-icon'>
                <a herf="https://www.linedin.com/in/samratpahari"><img src={icon1} alt="Icon"/></a>
                <a herf="https://www.facebook.com/profile.php?id=100021266539195"><img src={icon2} alt="Icon"/></a>
                <a herf="https://www.instagram.com/samrat_pahari_/"><img src={icon3} alt="Icon"/></a>
            </div>
            <p>CopyRight 2022, All Right Reserved Samrat Pahari</p>
            </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer
