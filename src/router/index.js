import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../component/home'
class RootRouters extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                 
                 
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RootRouters;