import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import React, { useState } from 'react'
import Connect, { align_center_style } from './Connect/Connect';
import MyCities from './Cities';
import logo from './images/logo.png';


export const managerContext = React.createContext()

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const LogoutHandler = () => setIsLogin(false)
  return (
    <Router>
      <div class="site-header">
        <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
          <div class="container">

            <Link class="navbar-brand mr-4" to="/"> <img src={logo} height="50px" /></Link>
            <div class="collapse navbar-collapse" id="navbarToggle">
              <div class="navbar-nav mr-auto">
                {isLogin && <Link class="nav-item nav-link" to="/my-cities">View Cities</Link>}
              </div>
              <div class="navbar-nav">
                {isLogin ?
                  <Link class="nav-item nav-link" onClick={LogoutHandler} to="/">Logout</Link>
                  :
                  <Link class="nav-item nav-link" to="/connect">Login &ensp;| &ensp;Register</Link>
                }
              </div>
            </div>
          </div >
        </nav >
      </div >
      <Switch>
        <managerContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
          <Route path="/connect">
            {!isLogin ? <Connect /> :
              <Redirect replace to="/records" />
            }
          </Route>
          <Route path="/my-cities">
            {isLogin ? <MyCities /> :
              <Redirect replace to="/connect" />
            }
          </Route>
          <Route exact path="/">
            <div style={align_center_style}>
              <img src={logo} />
              <h2>...מתערבים שזה חכם</h2>
              <h4><Link class="btn btn-secondary" to='/connect'> Join Today</Link></h4>
            </div>
          </Route>
        </managerContext.Provider>
      </Switch>
    </Router>
  )
}

export default App
