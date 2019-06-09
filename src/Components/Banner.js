import React from 'react';
import { Parallax } from 'react-parallax';

const Banner = () => {
    return (
        <Parallax
                bgImage={require('../asset/img/Parallax/MWD.jpg')}
                bgImageAlt="mwd"
                strength={400}
            >
                <div id="banner">
                    <div className="banner-text">
                        <img src="https://www.partitio.com/wp-content/uploads/2016/10/ecm-blog-partitio-5-1200x565.jpg" alt="profil" />
                       <h1>Aurélien Martin</h1>
                        <hr />
                        <h2>Développeur Web Junior</h2>
                    </div>
                </div>
            </Parallax>
    )
}

export default Banner;