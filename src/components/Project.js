import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useOutletContext } from "react-router-dom";
import { getProjects } from "../data";
import '../scss/Project.scss';

const Project = () => {

  // get current URL path from <Outlet /> context
  const path = useOutletContext();
  // array of all project data
  let projectsArray = getProjects();
  // find project that matches current path
  var currProject = projectsArray.find(element => element.path === path);
  // dynamically reference relevant project component
  const ReferencedComponent = currProject.component;


  // when component mounts & updates
  const rightContainer = document.getElementById('right');

  useEffect(() => {
    if (rightContainer) {
      rightContainer.scrollTop = 0;
    }
    setTimeout(() => {
      document.getElementById('projectContainer').classList.add('show');
    }, 200);
  });


  return (
    <>
    {/* renders project component based on URL path */}
    <div id="projectContainer">
      <Link to="/" id="closeProject"></Link>
      <div id={path}>
        <ReferencedComponent />
      </div>
    </div>
    </>
  )
}

export default Project;
