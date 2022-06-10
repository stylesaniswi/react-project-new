import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Add from "./components/Add";
import Show from "./components/Show";
import Getuser from "./components/Getuser";
import User from "./components/User";

 
class App extends Component {
  
  render() {
    
    return (
      <Router>
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/home" className="navbar-brand">
          luNiva
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              ADD
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/show"} className="nav-link">
              Show
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/getuser"} className="nav-link">
              Getuser
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              Your Profile
            </Link>
          </li>
        </div>
      </nav>
      
        <Routes>
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/show" element={<Show />} />
          <Route exact path="/getuser" element={<Getuser/>} />
          <Route exact path="/user" element={<User/>} />
        </Routes>
  
    </div>
    </Router>

   );
  }
}
 
export default App;