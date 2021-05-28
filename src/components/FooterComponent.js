import React from 'react';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <div className="icons">
                                <a href="https://github.com/samazevedo" target="_blank" rel="noopener noreferrer" ><i class="fab fa-github-alt"></i></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram-square"></i></a>
                                <a href="https://twitter.com/SamAzevedo4" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square"></i></a>
                                <a href="https://www.linkedin.com/in/samuel-azevedo-santos-908a5b53/ " target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <p id="copyright">© Copyright 2021 Sam Azevedo </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Footer;

