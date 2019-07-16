import React from 'react';

import avatar from '../asset/img/avatar.jpg';


const About = () => {
    return (
        <div id="About">
            <h2 className="text-center">A Propos</h2>
            <div className="jumbotron">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="col-md-8">
                        <p className="text-center">
                            Passionné par les nouvelles technologies, je me suis reconvertis dans les métiers du numérique. J’ai suivi une formation intensive de 5 mois à la wild code school de lille en Php/Symfony.
    Par la suite j’ai rejoins la formation Javascript à Simplon de Roubaix afin d'élargir mes compétences.
                                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;