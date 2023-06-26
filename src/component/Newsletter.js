import React from 'react'
import {  Row, Col } from 'react-bootstrap'

import { Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Newsletter = ({onValidated,status,message}) => {
    const [email, setEmail] = useState("");

    useEffect(()=> {
        if (status === 'success') clearFeilds()
    },[status])

    const handleSubmit = (e) => {
        e.preventDeafult();
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFeilds= () => {
        setEmail('');
    }

  return (
    <Col lg={12}>
      <div className='newsletter-bx' wow slideInUp>
        <Row>
            <Col lg={12} md={6} xl={5}>
                <h3>Subscribe to my Newsletter</h3>
                {status === 'sending' && <Alert>Sending...</Alert>}
                {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                {status === 'success' && <Alert variant='success'>{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
            <form> onSubmit={handleSubmit}
                <div className='new-email-bx'>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <button type="submit">Submit</button>
                </div>
            </form>
            </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Newsletter
