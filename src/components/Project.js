import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProjects } from "../data";
import '../scss/Project.scss';

const Project = () => {

  // get current path
  var location = useLocation();
  var path = location.pathname.substring(1);
  // array of all project data
  let projectsArray = getProjects();
  // find project that matches current path
  var currProject = projectsArray.find(element => element.path === path);
  // dynamically reference relevant project component
  const RenderDynamicProject = currProject.component;

  return (
    <>
    <Link to="/">close</Link>
    {/* renders project component based on URL path */}
    <div id="projectContainer">
      <RenderDynamicProject />
    </div>
    </>
  )
}

export default Project;
