import { Link, NavLink } from "react-router-dom";
import '../scss/Header.scss';

const Header = ({ detail }) => {

  const scrollBackUp = () => {
    document.getElementById('project-nav').scrollIntoView();
  }

  return (
    <header className={detail && "detail"}>

      <Link to="/" onClick={scrollBackUp}>Alex Hollender</Link>

      <div className="hide">you win some,<br/>you lose some</div>

      <NavLink to="aboutme">about me</NavLink>

    </header>
  )
}

export default Header;
