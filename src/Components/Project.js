import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import hemTennisClub from '../asset/img/Screen_projects/hemTennisClub.png';
import sfBnb from '../asset/img/Screen_projects/sf-bnb.png';
import monEspacePerruques from '../asset/img/Screen_projects/monEspacePerruques.png';
import reactMovies from '../asset/img/Screen_projects/React-movies.png';
import RlnegoceAuto from '../asset/img/Screen_projects/Rl-negoceAuto.png';
import RsBat from '../asset/img/Screen_projects/rs-Bat.png';
import chatBox from '../asset/img/Screen_projects/chatBox.png';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            php: false,
            react: false,
            symfony: true,
        }
    }

    toggleCategories = (e) => {
        const name = e.target.name;
        this.setState({
            php: false,
            react: false,
            symfony: false,
            [name]: !this.state.name
        })
    }

    render () {
        return (
            <div id="Project">
                <h2 className="text-center pb-5">Mes Projets</h2>
                <nav className="pb-3">
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <Link to="#" className="nav-item nav-link active" data-toggle="tab" name="symfony" onClick={this.toggleCategories} role="tab" aria-controls="nav-contact" aria-selected="false">Symfony</Link>
                        <Link to="#" className="nav-item nav-link" data-toggle="tab" name="php" onClick={this.toggleCategories} role="tab" aria-controls="nav-home" aria-selected="true">Php</Link>
                        <Link to="#" className="nav-item nav-link" data-toggle="tab" name="react" onClick={this.toggleCategories} role="tab" aria-controls="nav-profile" aria-selected="false">React</Link>
                    </div>
                </nav>
                {this.state.symfony &&
                    <>
                        <div className="row justify-content-md-center m-0">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={sfBnb} alt="Card sf-bnb" />
                                    <div className="card-body">
                                        <h5 className="card-title">SfBNB
                                    <span className="blink_me float-right">New !!</span>
                                        </h5>
                                        <p className="card-text">
                                            Site dynamique sous Symfony 4 permettant de poster des annonces de locations immobilières ainsi que les réservez selon les dates disponnibles.
                                        <br />Dashboard Admin permettant de voir nombre d'annonces, utilisateurs, réservations ...
                                        </p>
                                        <a href="https://sf-bnb.martin-aurelien.fr" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={hemTennisClub} alt="Card hem tennis club" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hem Tennis Club</h5>
                                        <p className="card-text">Site dynamique réalise en méthode agile sous symfony 3.4 avec un dashboard Admin pour le compte d'un client "Hem Tennis Club".</p>
                                        <a href="https://hemtennisclub.fr" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={RlnegoceAuto} alt="Card rl négoce auto" />
                                    <div className="card-body">
                                        <h5 className="card-title">Rl Negoce Auto</h5>
                                        <p className="card-text">Site dynamique réalisé sous symfony 3.4 avec un dashboard Admin pour le compte d'un client "Rl Négoce Auto".</p>
                                        <a href="https://rlnegoceauto.com" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {this.state.php &&
                    <>
                        <div className="row justify-content-md-center m-0">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={monEspacePerruques} alt="Card mon espace perruques" />
                                    <div className="card-body">
                                        <h5 className="card-title">Mon Espace Perruque</h5>
                                        <p className="card-text">Site vitrine réalise en php en méthode agile pour le compte d'un client "Mon Espace Perruques".</p>
                                        <a href="https://www.monespaceperruques.com/" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={RsBat} alt="Card rs-bat" />
                                    <div className="card-body">
                                        <h5 className="card-title">Rs Bat</h5>
                                        <p className="card-text">site vitrine réalise pour le compte d'un client "Rs Bat"</p>
                                        <a href="https://rsbat-sas.com" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {this.state.react &&
                    <>
                        <div className="row justify-content-md-center m-0">
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={reactMovies} alt="Card React-movies" />
                                    <div className="card-body">
                                        <h5 className="card-title">React Movies</h5>
                                        <p className="card-text">Application Réact réalisé avec la consommation d'une Api Rest "The Movie Database".</p>
                                        <a href="https://cocky-elion-08c934.netlify.com/" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src={chatBox} alt="Card chat-box" />
                                    <div className="card-body">
                                        <h5 className="card-title">React Chat Box</h5>
                                        <p className="card-text">Application Réact lié avec la database Firebase permettant de lancer un chat en temps réel</p>
                                        <a href="http://chat-box-react.herokuapp.com/" className="btn btn-primary" target="blank">Live Démo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default Project;