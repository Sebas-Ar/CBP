import React from 'react'
import Formulario from '../components/contacto/Formulario'
import Layout from '../components/layout/Layout'

const Contacto = () => (
    <Layout>
        <div className="content">
            <img className="logo" src="/img/Grupo-109-contacto.png" alt="Logotipo del restaurante"/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.597114592906!2d-79.5359127!3d8.9542429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe84082c1bb1cd61d!2sCapital%20Bistro%20Panam%C3%A1!5e0!3m2!1ses-419!2sco!4v1578066796667!5m2!1ses-419!2sco" width="100%" height="400px" frameBorder="0" allowFullScreen=""></iframe>
            <Formulario />
            <img className="oreja" src="/img/oreja1contacto.png" alt="logo"/>

            <style jsx>{`
                .content {
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 126px 3.5fr 3.5fr 1fr;
                    align-items: center;
                }

                iframe {
                    grid-column: 2/3;
                    grid-row: 1/2;
                    justify-self: flex-end;
                }

                .logo {
                    grid-row: 1/2;
                    grid-column: 1/3;
                    height: 480px;
                    z-index: 100;
                    box-shadow: 8px 8px 15px 0px #33333377;
                }

                .oreja {
                    justify-self: flex-end;
                    height: 60%;
                }

                @media screen and (max-width: 1040px) {
                    .content {
                        grid-template-columns: 3fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        padding-top: 100px;
                    }

                    iframe {
                        grid-column: 1/3;
                        grid-row: 2/3;
                    }

                    .logo {
                        grid-row: 2/3;
                        grid-column: 1/3;
                    }

                    .oreja {
                        height: 100%;
                    }
                }

                @media screen and (max-width: 450px) {
                    .oreja {
                        height: 60%;
                        position: absolute;
                        right: 0;
                        z-index: -1;
                        opacity: .5;
                    }
                }

            `}</style>

        </div>
    </Layout>
)

export default Contacto