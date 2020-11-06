import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';

import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
import Img4 from './images/4.jpg'
import Img5 from './images/5.jpg'
import Img6 from './images/6.jpg'
import Img7 from './images/7.jpg'

import './Index.css'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));



export default () => {
    const classes = useStyles();

    return (
        <React.Fragment >
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <main className="pt-4">
                    <section className="myRepair mt-5">
                        <div className="container mt-5">
                            <h1 className="text-center mt-3 mb-3">¿What do you want to repair?</h1>
                        </div>
                    </section>
                    <section class="myMobiles m-3 p-3">
                        <div class="row">
                            <article class="col-4 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img1" src={Img1} alt="Mobile" />
                                    <h3 class="m-3">Reparar Iphone</h3>
                                </Link>
                            </article>
                            <article class="col-4 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img1" src={Img2} alt="Mobile" />
                                    <h3 class="m-3">Reparar Ipad</h3>
                                </Link>
                            </article>
                            <article class="col-4 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img1" src={Img3} alt="Mobile" />
                                    <h3 class="m-3">Reparar Macbook</h3>
                                </Link>
                            </article>
                        </div>
                        <hr />
                        <div class="row">
                            <article class="col-3 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img2" src={Img4} alt="Mobile" />
                                    <h3 class="m-3">Reparar Samsung</h3>
                                </Link>
                            </article>
                            <article class="col-3 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img2" src={Img5} alt="Mobile" />
                                    <h3 class="m-3">Reparar Xiaomi</h3>
                                </Link>
                            </article>
                            <article class="col-3 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img2" src={Img6} alt="Mobile" />
                                    <h3 class="m-3">Reparar Huawei</h3>
                                </Link>
                            </article>
                            <article class="col-3 text-center mt-3">
                                <Link to='/shop'>
                                    <img class="img2" src={Img7} alt="Mobile" />
                                    <h3 class="m-3">Reparar Otros...</h3>
                                </Link>
                            </article>
                        </div>
                        <hr />
                    </section>

                    <section class="p-3">
                        <div class="card-columns p-3">

                            <div class="card border-primary text-white text-center p-3 test">
                                <blockquote class="blockquote mb-0">
                                    <p class="text-secondary">Resolvemos cualquier duda que tenga y le ofrecemos un presupuesto gratuito.
                </p>
                                </blockquote>
                            </div>

                            <div class="card border-primary text-white text-center p-3 test">
                                <blockquote class="blockquote mb-0">
                                    <p class="text-secondary">Resolvemos cualquier duda que tenga y le ofrecemos un presupuesto gratuito.
                </p>
                                </blockquote>
                            </div>

                            <div class="card border-primary text-white text-center p-3 test">
                                <blockquote class="blockquote mb-0">
                                    <p class="text-secondary">Resolvemos cualquier duda que tenga y le ofrecemos un presupuesto gratuito.
                </p>
                                </blockquote>
                            </div>

                            <div class="card border-primary text-white text-center p-3 test">
                                <blockquote class="blockquote mb-0">
                                    <p class="text-secondary">Resolvemos cualquier duda que tenga y le ofrecemos un presupuesto gratuito.
                </p>
                                </blockquote>
                            </div>

                            <div class="card border-primary text-white text-center p-3 test">
                                <blockquote class="blockquote mb-0">
                                    <p class="text-secondary">Resolvemos cualquier duda que tenga y le ofrecemos un presupuesto gratuito.
                </p>
                                </blockquote>
                            </div>

                            <div class="card border-primary text-white text-center p-3 test">
                                <blockquote class="blockquote mb-0">
                                    <p class="text-secondary">Resolvemos cualquier duda que tenga y le ofrecemos un presupuesto gratuito.
                </p>
                                </blockquote>
                            </div>
                        </div>
                    </section>
                </main>
            </Container>
        </React.Fragment >
    );
}