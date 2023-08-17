import React from 'react'
import {Col} from 'react-bootstrap'

const ProjectCards = ({title,description,imgUrl,codeUrl}) => {
  return (
    <Col sm={6} md={4}>
      <a href={codeUrl}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="Imagefromdata"/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </a>
    </Col>
  )
}

export default ProjectCards
