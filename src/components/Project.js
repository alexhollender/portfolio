import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Nav from "./Nav";
import Picture from "./Picture";
import ProjectContent from "./ProjectContent";
import '../scss/Project.scss';

const Project = () => {
  // get project id from outlet context (i.e. props)
  const projectPath = useOutletContext();
  console.log(`Project: ${projectPath}`);

  // when component mounts & updates
  const rightContainer = document.getElementById('right');
  useEffect(() => {
    if (rightContainer) {
      rightContainer.scrollTop = 0;
    }
  });

  return (
    <div
      id="project-wrapper"
      className={projectPath ? "projectActive" : "initial"}
    >
      <section id="left">
        <div className="container-left">
          <p id="intro">hey, i'm alex...these are some things i've worked on as a designer and developer:</p>
          <Nav />
        </div>
      </section>

      <section id="right">
        <div className="container-right">
          {/* if no projectPath show Picture */}
          {
            !projectPath ?
            <Picture /> :
            <ProjectContent project={projectPath} />
          }
        </div>
      </section>
    </div>
  )
}

export default Project;
