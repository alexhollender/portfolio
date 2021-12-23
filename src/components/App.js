import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";
import '../scss/App.scss';
import picture from '../img/picture.jpg';

const App = () => {

  // check if there is a project in the URL path
  var location = useLocation();
  var length = location.pathname.length;

  return (
    <div id="container" className={length > 1 ? "project" : "noProject"}>
      <section id="left">
        <div className="container-left">
          <p id="intro">hey, i'm alex, and these are some things i've worked on as a designer and developer:</p>
          <Nav />
        </div>
      </section>
      <section id="right">
        <div className="container-right">
          {length === 1 &&
            <img id="homeImage" src={picture} />
          }

          <Outlet />
          {/* leads to <ProjectContainer /> */}
        </div>
      </section>
    </div>
  )
}

export default App;
