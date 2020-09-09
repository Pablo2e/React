import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink /* Se usa para que se active el boton cuando se clickee */
} from "react-router-dom";
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import User from './components/User';
 
function App() {
  return (
    <Router>
      <div className="container mt-5">
        {/* BOTONES */}
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        <hr/>
          <Switch> {/* Ordenar desde lo mas especifico a lo mas general, sino usar el exact */}
            <Route path="/nosotros/:id">
              <User/>
            </Route>
            <Route path="/contacto">
              <Contacto/>
            </Route>
            <Route path="/nosotros">
              <Nosotros/>
            </Route>
            <Route path="/" exact> {/* poner siempre ultimo o con exact */}
              <Inicio/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
