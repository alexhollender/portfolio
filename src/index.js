import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './components/App';
import Project from './components/Project';
import Picture from './components/Picture';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":projectId" element={<Project />} />
          </Route>
          <Route path="/picture" element={<Picture />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
