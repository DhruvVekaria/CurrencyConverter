import React from "react";
import './App.css';
//import Header from './components/Header';
import Homepage from './components/Homepage'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Docs from './components/Docs';

function App() {
  return (
    <>
      <header align = 'center'>
        <h1>Currency Conversion</h1>
      </header>
      <Router>
        <Navbar />
        <Route path="/Homepage" exact component={Homepage} />
        <Route path="/Docs">
          <Docs></Docs>
        </Route>
      </Router>
    </>
  );
}

export default App;
