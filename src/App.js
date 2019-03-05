import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Acceuil from'./component/acceuil';
import Propos from'./component/propos';
import Contact from'./component/contact';
import './component/acceuil.css';
import './component/prop.css';
import './component/contac.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
   
    return (
        <Router>
    <div className="container-fluid">
    <div className="container-fluid">
        <ul className="gedr">
          <li className="gedr1" >
            <Link to="/"  className="gedr1">Acceuil</Link>
          </li>
          <li className="gedr1" >
            <Link to="/A propos" className="gedr1">A propos</Link>
          </li>
          <li className="gedr1">
            <Link to="/Contact"  className="gedr1">contact</Link>
          </li>
        </ul>
        <hr />
        </div>
        <Route  path="/" exact component={Acceuil} />
        <Route path="/A propos" component={Propos} />
        <Route path="/Contact" component={Contact} />
        <footer>
        <div className="foot">
        <h1>
footer
        </h1>
        </div>
        </footer>
      </div>
    </Router>
   

    );
  }
  
}


export default App;
