import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Picture from "./Picture";
import '../scss/App.scss';

const App = () => {

  // get project path from url (via react router)
  const { projectPath } = useParams();
  console.log(`App: ${projectPath}`);

  return (
    <>
    {/* tell the header if a project is active */}
    <Header isSub={projectPath && "sub"}/>

    {/* tell the main element if a project is active */}
    <main>

      {/* renders project, about me, etc. */}
      {/* context only if the URL has a :projectPath */}
      <Outlet context={projectPath} />

      {/* if no active project, show picture */}
      { !projectPath && <Picture /> }

    </main>
    </>
  )
}

export default App;
