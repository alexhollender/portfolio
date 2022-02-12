import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useOutletContext } from "react-router-dom";
import { getProjects } from "../data";
import '../scss/Project.scss';

const Project = () => {

  // -- Get & render project -- //

  // get current URL path from <Outlet /> context
  var location = useOutletContext();
  // remove "/" from beginning of URL path
  var path = location.substring(1);
  // array of all project data
  let projectsArray = getProjects();
  // find project that matches current path
  var currProject = projectsArray.find(element => element.path === path);
  // dynamically reference relevant project component
  const ReferencedComponent = currProject.component;

  // -- View controls -- //

  const rightContainer = document.getElementById('right');
  const projectCont = document.getElementById('projectContainer');
  // when component mounts & updates
  useEffect(() => {
    rightContainer.scrollTop = 0;
    // projectCont.classList.add("my-class");
    console.log('yoshi');
  });


  return (
    <>
    {/* renders project component based on URL path */}
    <div id="projectContainer" className={path}>
      <Link to="/" id="closeProject"></Link>
      <div id={path}>
        <ReferencedComponent />
      </div>
    </div>
    </>
  )
}

export default Project;
