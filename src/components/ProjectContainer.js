import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ProjectContents from "./ProjectContents";

const ProjectContainer = () => {

  var location = useLocation();
  var path = location.pathname.substring(1);

  return (
    <>
    <section id="right">
      <div className="container-right">
        <Link to="/">close</Link>
        {/* renders project component based on URL path */}
        <ProjectContents project={path} />
      </div>
    </section>
    </>
  )
}

export default ProjectContainer;
