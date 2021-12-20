import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProjects } from "../data";

const Project = () => {

  var location = useLocation();
  var path = location.pathname.substring(1);
  let projects = getProjects();
  var currProject = projects.find(element => element.path === path);
  console.log(currProject);

  return (
    <>
    <section id="right">
      <div className="container-right">
        <Link to="/">close</Link>
        <div
          id="projectContent"
          dangerouslySetInnerHTML={{__html: currProject.content}}
        />
      </div>
    </section>
    </>
  )
}

export default Project;
