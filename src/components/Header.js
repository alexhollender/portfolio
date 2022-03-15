import { Link, NavLink } from "react-router-dom";
import '../scss/Header.scss';

const Header = () => {

  return (
    <header>

      <Link to="/">Alex Hollender</Link>

      <div className="hide"><p>you win some,<br/>you lose some</p></div>

      <nav>
        <NavLink to="aboutme">about me</NavLink>
      </nav>

    </header>
  )
}

export default Header;
