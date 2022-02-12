import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Picture from "./Picture";
import { Outlet, useLocation } from "react-router-dom";
import '../scss/App.scss';
import picture from '../media/homepage.jpg';

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
            <Picture />
          }

          {/* leads to <Project /> if there is a project path in the URL) */}
          {/* pass along URL path to <Project /> so it can render the correct project */}
          <Outlet context={location.pathname} />
        </div>
      </section>
    </main>
    </>
  )
}

export default App;
