import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import NotFound from "./NotFound";

import '../App.css';

class Router extends Component {


    render () {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} strict />
                    <Route component={NotFound} strict />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router