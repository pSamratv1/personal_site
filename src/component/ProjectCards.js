import React from 'react'
import {Col} from 'react-bootstrap'

const ProjectCards = ({title,description,imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="Imagefromdata"/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCards
