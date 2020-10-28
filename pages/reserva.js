import React from 'react'
import FormReserv from '../components/reserva/FormReserv'
import Layout from '../components/layout/Layout'

const Reserva = () => (
    <Layout>
        <div className="content">
            <FormReserv className="form" />
            <div className="food"></div>
            {/* <img className="food" src="/img/Grupo-117.png" alt="plato de comida"/> */}
            <div className="map">
                <div className="description">
                    <div className="cuadrado">
                        <img className="logo" src="/img/Grupo-107.png" alt="logo dl restaurante"/>
                    </div>
                    <h2>LOREM IPSUM DOLOR ET</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque ex impedit perspiciatis asperiores qui soluta ipsam velit expedita eum amet placeat, natus inventore eius.</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.597114592906!2d-79.5359127!3d8.9542429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe84082c1bb1cd61d!2sCapital%20Bistro%20Panam%C3%A1!5e0!3m2!1ses-419!2sco!4v1578066796667!5m2!1ses-419!2sco" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>
            </div>

            <style jsx>{`
                .content {
                    display: grid;
                    grid-template-columns: 5fr 4fr;
                    grid-template-rows: 5fr  70px 3fr;
                }

                .food {
                    grid-column: 2/3;
                    grid-row: 1/3;
                    background-image: url("/img/Grupo-117.png");
                    background-size: auto 100%;
                    background-position: center;
                    z-index: 500
                }

                .map {
                    grid-column: 1/3;
                    grid-row: 2/4;
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                }

                .description {
                    background: #A99767;
                    display: grid;
                    grid-template-rows: 3fr 1.5fr 3fr;
                    justify-items:center;
                    padding: 0 30px;
                    box-shadow:5px 5px 10px 1px #777777;
                }

                .cuadrado {
                    height:100px;
                    width: 100px;
                    background: white;
                    border-radius: 50%;
                    display:grid;
                    justify-items:center;
                    align-items:center;
                    align-self: flex-end;
                }

                img {
                    height: 50px;
                }

                h2, p {
                    color: white;
                    text-align:center;
                }

                h2 {
                    align-self: center;
                }

                
            `}</style>
        </div>
    </Layout>

)

export default Reserva