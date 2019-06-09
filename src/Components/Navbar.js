import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';




class NavbarMenu extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-top">
                <div className="mr-auto order-0">
                    <NavLink to="/#banner" className="navbar-brand ml-auto active">Mon Portfolio</NavLink>
                </div>
                <div className="ml-auto">
                    <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/#banner" isActive={()=> window.location.pathname + window.location.hash === "/#banner"} className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/#Project" isActive={()=> window.location.pathname + window.location.hash === "/#Project"} className="nav-link" activeClassName="active" >Mes Projets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/#toolsAndLlf" isActive={()=> window.location.pathname + window.location.hash === "/#toolsAndLlf"} className="nav-link" activeClassName="active">Langages & Outils</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/#About" isActive={()=> window.location.pathname + window.location.hash === "/#About"} className="nav-link">A Propos</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarMenu;