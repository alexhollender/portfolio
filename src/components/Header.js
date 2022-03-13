import { Link, NavLink } from "react-router-dom";
import '../scss/Header.scss';

const Header = ({ isSub }) => {

  return (
    <header className={isSub ? "sub" : "initial"}>
      <div id="header-left">
        <Link to="/" id="closeProject">← close project detail view</Link>
        <p className="notSub">Alex Hollender</p>
      </div>
      <div className="notSub"><p>you win some<br/>you loose some</p></div>
      <nav>
        <NavLink to="/">projects</NavLink>
        <NavLink to="aboutme">about me</NavLink>
      </nav>
    </header>
  )
}

export default Header;
