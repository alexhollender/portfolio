import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import Nav from "./Nav";
import Picture from "./Picture";
import ProjectContent from "./ProjectContent";
import '../scss/Project.scss';

const Project = () => {
  // get projectPath from outlet context (i.e. props)
  const projectPath = useOutletContext();
  console.log(`Project: ${projectPath}`);

  // when component mounts & updates
  useEffect(() => {
    // reset scroll of right container
    document.getElementById('project-right').scrollTop = 0;
  });

  return (
    <div id="project-wrapper" className={projectPath && "project-active"}>
      <section id="project-left">
        <div id="project-nav">
          <p id="intro">hey, i'm alex...these are some things i've worked on as a designer and developer:</p>
          <Nav />
        </div>
        { !projectPath && <Picture /> }
      </section>
      <section id="project-right">
        {/* if projectPath show ProjectContent */}
        { projectPath && <ProjectContent project={projectPath} /> }
      </section>
    </div>
  )
}

export default Project;
