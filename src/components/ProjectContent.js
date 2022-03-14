import React, { useEffect } from 'react';
import { getProjects } from "../data";
import '../scss/ProjectContent.scss';

const ProjectContent = ({ project }) => {
  
  console.log(`ProjectContent: ${project}`);
  // array of all project data
  let projectsArray = getProjects();
  // find project that matches current path
  var currProject = projectsArray.find(element => element.path === project);
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
    <div id="projectContent">
      <div id={project}>
        <ReferencedComponent />
      </div>
    </div>
  )
}

export default ProjectContent;
