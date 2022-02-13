import { useLocation } from "react-router-dom";
import App from "./App";

const AppRenderer = () => {

  // get project from URL
  // (this check runs any time the URL changes)
  // (<Project /> gets re-rendered with latest context)
  var location = useLocation();
  var path = location.pathname.substring(1);
  var pathLength = path.length;

  return (
    <>
    <App path={path.length > 0 ? path : null} />
    </>
  )
}

export default AppRenderer;
