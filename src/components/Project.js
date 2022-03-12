import React, { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProjects } from "../data";
import '../scss/Project.scss';

const Project = () => {
  // get project id from outlet context (i.e. props)
  const projectPath = useOutletContext();

  console.log(`Project: ${projectPath}`);

  // array of all project data
  let projectsArray = getProjects();
  // find project that matches current path
  var currProject = projectsArray.find(element => element.path === projectPath);
  // dynamically reference relevant project component
  const ReferencedComponent = currProject.component;

  // when component mounts & updates
  const rightContainer = document.getElementById('right');
  useEffect(() => {
    if (rightContainer) {
      rightContainer.scrollTop = 0;
    }
  });

  return (
    <div id="projectContainer">
      <Link to="/" id="closeProject"></Link>
      <div id={projectPath}>
        <ReferencedComponent />
      </div>
    </div>
  )
}

export default Project;
