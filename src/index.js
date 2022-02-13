import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AppRenderer from './components/AppRenderer';
import Project from './components/Project';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppRenderer />}>
            <Route path=":projectId" element={<Project />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
