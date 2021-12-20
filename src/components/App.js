import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";
import '../scss/App.scss';

const App = () => {

  var location = useLocation();
  var length = location.pathname.length;

  return (
    <div id="container" className={length > 1 ? "project" : "noProject"}>
      <section id="left">
        <div className="container-left">
          <p id="intro">hey, i'm alex, and these are some things i've worked on as a designer and developer. <em>click on a project to see more information:</em></p>
          <Nav />
        </div>
      </section>
      <Outlet />
      {/* leads to <ProjectContainer /> */}
    </div>
  )
}

export default App;
