import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { getProjects } from "../data";
import '../scss/Nav.scss';

let projects = getProjects();

const Nav = () => {

  return (
    <>
    <nav>
      {projects.map(project => (
        <NavLink to={`/${project.path}`} key={project.path}>
          <NavItem name={project.name} description={project.description}/>
        </NavLink>
      ))}
    </nav>
    </>
  )
}

export default Nav;
