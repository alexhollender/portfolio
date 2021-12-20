import React from 'react';
import { pathComponentObject } from "../data";

// object of paths and components
let components = pathComponentObject();

const ProjectContents = ({ project }) => {
  // renders component matching the project prop passed to <ProjectContents />
  const DynamicComponent = components[project];
  return <DynamicComponent />;
}

export default ProjectContents;
