import Header from "./Header";
import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";
import '../scss/App.scss';
import picture from '../media/homepage/picture.jpg';

const App = () => {

  // check if there is a project path in the URL path
  var location = useLocation();
  var length = location.pathname.length;

  return (
    <>
    {/* if there is no project path in the URL show the header */}
    {length === 1 &&
      <Header />
    }
    <main id="page" className={length > 1 ? "project" : "noProject"}>
      <section id="left">
        <div className="container-left">
          <p id="intro">hey, i'm alex...these are some things i've worked on as a designer and developer:</p>
          <Nav />
        </div>
      </section>
      <section id="right">
        <div className="container-right">
          {/* if there is no project path in the URL show the image */}
          {length === 1 &&
            <img id="homeImage" src={picture} />
          }

          {/* leads to <Project /> if there is a project path in the URL)*/}
          <Outlet />
        </div>
      </section>
    </main>
    </>
  )
}

export default App;
