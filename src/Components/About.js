import React from 'react';

const About = () => {
    return (
        <div id="About" className="About">
            <h2 className="text-center">A propos</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <img src="http://www.loansplus.co.za/img/team-avatar.jpg" alt="avatar" />
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        Passionné par les nouvelles technologies, je me suis reconvertis dans les métiers du numérique. J’ai suivi une formation intensive de 5 mois à la wild code school de lille en Php/Symfony.
            Par la suite j’ai rejoins la formation Javascript à Simplon de Roubaix afin d'élargir mes compétences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;