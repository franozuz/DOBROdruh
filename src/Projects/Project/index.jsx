import React from 'react';
import './style.css';

const Project = (props) => {
  return (
    <article className="project">
      <img src={props.image} alt={props.alt} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Zjisti víc &gt; &gt; </a>
    </article>
  );
};

export default Project;
