import React from 'react';

import Banner from './Banner';
import Project from './Project';
import ToolsAndLlf from './ToolsAndLlf';
import About from './About';


import '../App.css';

const Home = () => {
    return (
        <div className="container-fluid p-0">
            <Banner />
            <Project />
            <ToolsAndLlf />
            <About />
                <a href="#banner">
                    <div className="buttonUp display">
                        <i className="fas fa-arrow-up"></i>
                    </div>
                </a>
        </div>
    )
}

export default Home;