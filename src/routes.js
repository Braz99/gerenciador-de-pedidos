import React from 'react'
import {BrowserRouter ,Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";


function Router(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact >
                <Home />
            </Route>
            <Route path='/list' >
                <List />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}


export default Router;