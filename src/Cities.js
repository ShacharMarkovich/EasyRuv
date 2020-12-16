import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useRouteMatch } from "react-router-dom"
import City from './City'


export const align_center_style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 100,
    border: "50px solid light red"
}

function MyCities() {
    let { path, url } = useRouteMatch()
    const citisNames = ["Tel Aviv-Jaffa", "Rishon Lezion", "Givatayim", "Holon", "Petah Tikva", "Hispin"]
    return (<div style={{ "margin-left": "280px" }} >
        <h1 class="article-metadata">Cities</h1><br></br>
        {citisNames.map(name => <><Link to={url + '/' + name} class="btn btn-outline-dark">{name}</Link>&emsp;&emsp;</>)}
        <br></br><br></br><br></br><br></br>
        <Switch>
            <Route exact path={path}>
                <h3>Please Select a city.</h3>
            </Route>
            <Route path={`${path}/:cityName`}>
                <City />
            </Route>
        </Switch>
    </div >)
}


export default MyCities;