import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-4 contact">
                                <h2 className="pb-4">Contact</h2>
                                <div>
                                    <i className="fas fa-phone-square"></i> 06.59.82.42.09
                                </div>
                                <div>
                                    <i className="fas fa-envelope "></i> <a href="mailto:martin.aurelien01@gmail.com">[martin.aurelien01@gmail.com]</a>
                                </div>
                            </div>
                            <div className="col-md-4 link">
                                <h2 className="pb-4">Liens</h2>
                                <div className="row">
                                    <div className="col-auto">
                                        <a href="https://github.com/b0ndurant" target="blank"><i className="fab fa-github-square"></i></a>
                                    </div>
                                    <div className="col-auto">
                                        <a href="https://www.linkedin.com/in/aurelien-martin85/" target="blank"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright text-center" style={{backgroundColor:'#0c0c0c', padding:"1rem"}}>
                        Copyright 2019 &copy; <strong>A.Martin</strong> - make with <em>React App</em>
                    </div>
                </footer>
    )
}

export default Footer;