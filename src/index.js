import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './components/App';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Project />}>
              <Route path=":projectPath" element={<Project />} />
            </Route>
            <Route path="aboutme" element={<AboutMe />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
