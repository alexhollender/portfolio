import { Link } from "react-router-dom";
import '../scss/Header.scss';

const Header = ({ isSub }) => {

  return (
    <header className={isSub ? "sub" : "initial"}>
      <Link to="/" id="closeProject">← close project detail view</Link>
      <div className="notSub"><p>Alex Hollender</p></div>
      <div className="notSub"><p>you win some<br/>you loose some</p></div>
      <div><u>home page</u>about me</div>
    </header>
  )
}

export default Header;
