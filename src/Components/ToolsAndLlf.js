import React from 'react';
import { Parallax } from 'react-parallax';


import html5 from '../asset/img/Logo/html-5.png';
import css3 from '../asset/img/Logo/css-3.png';
import bootstrap from '../asset/img/Logo/bootstrap.png';
import php from '../asset/img/Logo/php.png';
import symfony from '../asset/img/Logo/symfony.png';
import js from '../asset/img/Logo/javascript.png';
import react from '../asset/img/Logo/react.png';
import sql from '../asset/img/Logo/sql.png';
import github from '../asset/img/Logo/github.png';
import phpstorm from '../asset/img/Logo/phpstorm.png';
import vscode from '../asset/img/Logo/vscode.png';
import sublimetext from '../asset/img/Logo/sublimetext.png';
import ubuntu from '../asset/img/Logo/ubuntu.png';

const ToolsAndLlf = () => {
    return (
        <Parallax
            bgImage={require('../asset/img/Parallax/Dev.jpg')}
            bgImageAlt="mwd"
            strength={400}
        >
            <div id="toolsAndLlf" className="toolsAndLlf">
                <h2 className="text-center">Langages / librairies / framework</h2>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <img src={html5} alt="logo html5" title="Html5" />
                    </div>
                    <div className="col-auto">
                        <img src={css3} alt="logo css3" title="Css3"/>
                    </div>
                    <div className="col-auto">
                        <img src={bootstrap} alt="logo boostrap" title="Bootstrap"/>
                    </div>
                    <div className="col-auto">
                        <img src={php} alt="logo php" title="Php"/>
                    </div>
                    <div className="col-auto">
                        <img src={symfony} alt="logo symfony" title="Symfony"/>
                    </div>
                    <div className="col-auto">
                        <img src={js} alt="logo js" title="Javascript"/>
                    </div>
                    <div className="col-auto">
                        <img src={react} alt="logo react" title="React"/>
                    </div>
                    <div className="col-auto">
                        <img src={sql} alt="logo sql" title="Sql"/>
                    </div>
                    <div className="col-auto">
                        <img src={github} alt="logo github" title="Github"/>
                    </div>
                </div>
                <hr />
                <h2 className="text-center">outils utilisées</h2>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <img src={phpstorm} alt="logo phpstorm" title="Php Storm"/>
                    </div>
                    <div className="col-auto">
                        <img src={vscode} alt="logo vscode" title="VsCode"/>
                    </div>
                    <div className="col-auto">
                        <img src={sublimetext} alt="logo sublime text" title="Sublime Text"/>
                    </div>
                    <div className="col-auto">
                        <img src={ubuntu} alt="logo ubuntu" title="Ubuntu"/>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default ToolsAndLlf;