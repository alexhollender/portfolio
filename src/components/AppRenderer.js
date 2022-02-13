import { useParams } from "react-router-dom";
import App from "./App";

const AppRenderer = () => {

  // get project id from react router
  const { projectPath } = useParams();

  console.log(`AppRenderer: ${projectPath}`);

  return (
    <>
    {/* if there is a project, pass it to App (path prop) */}
    {/* otherwise pass along null (path prop) */}
    <App projectPath={projectPath ? projectPath : null} />
    </>
  )
}

export default AppRenderer;
