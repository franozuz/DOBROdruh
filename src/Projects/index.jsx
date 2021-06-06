import React from 'react';
import Project from './Project';
import './style.css';
import projects from "./projects.json"

const Projects = () => {
  return (
    <section className="projects">
      <h1>Podpoř vybraný projekt a zneutralizuj svou uhlíkovou stopu!</h1>
      <div className="projectList">
        {projects.map((project) => <Project key={project.id} image={project.image} alt={project.alt} name={project.name} description={project.description} link={project.link}/>)}
      </div>
    </section>
  );
};

export default Projects;
