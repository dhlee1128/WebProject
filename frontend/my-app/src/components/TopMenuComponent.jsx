import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Routes} from "react-router-dom";

import MainComponent from "./main-home";
import DashboardComponent from "./Dashboard";

class TopMenuComponent extends Component {
    render() {
        return (
            <Router>
                <Navbar
                    bg="dark"
                    variant="dark"
                    className="mg-4" >
                    <Navbar.Brand href="/">
                        Home
                    </Navbar.Brand>
                    <Navbar.Brand href="/main-home">
                        Main
                    </Navbar.Brand>
                    <Navbar.Brand href="/Dashboard">
                        Dashborad
                    </Navbar.Brand>
                </Navbar>

                <Routes path="/main-home" component={MainComponent} />
                <Routes path="/Dashboard" component={DashboardComponent} />
            </Router>
        )
    }
}

export default TopMenuComponent;