import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
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

    <main>
      {/* context will only be passed along if */}
      {/* the URL matches the :projectPath */}
      <Outlet context={projectPath} />
    </main>
    </>
  )
}

export default App;
