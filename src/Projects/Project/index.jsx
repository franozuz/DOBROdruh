import React from 'react';
import './style.css';


const Project = (props) => {
  return (
    
      <article className="project">
          <img src={props.image} alt={props.alt} />
          <h2>{props.name}</h2>
          <p>
            {props.description}
          </p>
      </article>
    
    
  )
};

export default Project;