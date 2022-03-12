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

    {/* if no project show header */}
    <Header view={projectPath && "project"}/>

    <main>
      <Outlet context={projectPath} />
    </main>
    </>
  )
}

export default App;
