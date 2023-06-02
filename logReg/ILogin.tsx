import React from 'react';

const ILogin = () => {

    const myelement = (
        <html>
        <head>
            <title>Webleb</title>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="styles.css"></link>
        </head>
        <body>
        <div class="section">
            <div class="container">
                <div class="row full-height justify-content-center">
                    <div class="col-12 text-center align-self-center py-5">
                        <div class="section pb-5 pt-5 pt-sm-2 text-center">
                            <div class="switch">
                                <h6 class="mb-0 pb-3"><span>Log In</span><span>Sign Up</span></h6>
                            </div>
                            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div class="card-3d-wrap mx-auto">
                                <div class="card-3d-wrapper">
                                    <div class="card-front">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                                <h4 class="mb-4 pb-3">Die AFFEN wollen DICH!!</h4>
                                                <div class="form-group">
                                                    <input type="email" class="form-style" placeholder="Email">
                                                        <i class="input-icon uil uil-at"></i>
                                                    </input>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input type="password" class="form-style" placeholder="Password">
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </input>
                                                </div>
                                                <a href="https://www.web-leb.com/code" class="btn mt-4">ILogin</a>
                                                <p class="mb-0 mt-4 text-center"><a href="https://www.web-leb.com/code" class="link">Forgot your password?</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                                <h4 class="mb-3 pb-3">KOMM RAN!</h4>
                                                <div class="form-group">
                                                    <input type="text" class="form-style" placeholder="Full Name">
                                                        <i class="input-icon uil uil-user"></i>
                                                    </input>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input type="email" class="form-style" placeholder="Email">
                                                        <i class="input-icon uil uil-at"></i>
                                                    </input>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input type="password" class="form-style" placeholder="Password">
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </input>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <input type="password" class="form-style" placeholder="Nochmal">
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </input>
                                                </div>
                                                <a href="https://www.web-leb.com/code" class="btn mt-4">Sign Up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    )

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(myelement)

    return (
        <div></div>
    );
};

export default ILogin;