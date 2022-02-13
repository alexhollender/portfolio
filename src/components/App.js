import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Picture from "./Picture";
import { Outlet, useLocation } from "react-router-dom";
import '../scss/App.scss';
import picture from '../media/homepage.jpg';

const App = (props) => {

  console.log(props.path);

  return (
    <>
    {/* if there is no project path in the URL show header */}
    {!props.path &&
      <Header />
    }
    <main id="page" className={props.path ? "project" : "noProject"}>
      <section id="left">
        <div className="container-left">
          <p id="intro">hey, i'm alex...these are some things i've worked on as a designer and developer:</p>
          <Nav />
        </div>
      </section>
      <section id="right">
        <div className="container-right">
          {/* if there is no project path in the URL show <Picture /> */}
          {!props.path &&
            <Picture />
          }

          {/* leads to <Project /> */}
          {/* pass URL path to <Project /> */}
          <Outlet context={props.path} />
        </div>
      </section>
    </main>
    </>
  )
}

export default App;
