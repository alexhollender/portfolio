import Header from "./Header";
import Nav from "./Nav";
import Picture from "./Picture";
import Project from "./Project";
import '../scss/App.scss';
import picture from '../media/homepage.jpg';

const App = ({ projectPath }) => {

  console.log(`App: ${projectPath}`);

  return (
    <>

    {/* if no project show header */}
    {!projectPath &&
      <Header />
    }

    <main id="page" className={projectPath ? "project" : "noProject"}>

      <section id="left">
        <div className="container-left">
          <p id="intro">hey, i'm alex...these are some things i've worked on as a designer and developer:</p>
          <Nav />
        </div>
      </section>

      <section id="right">
        <div className="container-right">
          {
            projectPath ?
            <Project projectPath={projectPath} /> :
            <Picture />
          }
        </div>
      </section>

    </main>
    </>
  )
}

export default App;
