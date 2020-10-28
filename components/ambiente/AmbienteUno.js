import React, { useState } from 'react'

const AmbienteUno = () => {

    const [text, setText] = useState(0);

    const changeText = p => {
        setText(p)
    }

return (
    <React.Fragment>
        <div className="fondo1">
            <div className="linea">
                <h1>RESTAURANTE DEL CASCO VIEJO DE PANAMA</h1>
            </div>
        </div>

        <div className="cont1">
            <div className="info1">
                <img src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb2.jpg" alt="" onClick={() => {changeText(1)}}/>
                <div className="description">
                    <h2>IPSUM DOLOR ET</h2>
                    {
                        text === 0 ?
                            <p>El Rooftop de CBP es único no sólo por su increíble vista, sino, porque es el único tercer piso de Casco Antiguo en el que se ingresa caminando desde la calle.</p>
                            : text === 1 ?
                                <p>Nam doloremque ab cum quae officia ipsum ut dicta praesentium repellendus? Sit quibusdam voluptas ducimus possimus fugiat!</p>
                                : text === 2 ? 
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque ab cum quae officia ipsum ut dicta praesentium repellendus? Sit quibusdam voluptas ducimus possimus fugiat!</p>
                                    : <p>Dicta praesentium repellendus? Sit quibusdam voluptas ducimus possimus fugiat!</p>
                    }       
                    
                    <button onClick={() => { changeText(0) }}>&lsaquo;</button>
                </div>
                <img src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb3.jpg" alt="" onClick={() => {changeText(2)}}/>
                <div></div>
                <img src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb.jpg" alt="" onClick={() => {changeText(3)}}/>
            </div>
        </div>

        <style jsx>{`

            :global(:root) {
                --sizeUno: 1;
            }
            
            .fondo1 {
                width: 100%;
                height: 100vh;
                background: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb1.jpg");
                background-size: cover;
                display: grid;
                align-items: center;
                justify-items: center;
                overflow: hidden;
            }

            .linea {
                align-self: center;
                width: 100%;
                border-bottom: 15px solid white;
                transform: translate(-150%);
                animation: deslizarTitulo 1s 1s linear forwards;
            }

            h1 {
                
                width: 400px;
                color: white;
                font-size: 60px;
                margin: 10px 0;
            }

            .cont1 {
                backgroundo: white;
                display: grid;
                justify-items:center;
                height: calc( 200px * var(--sizeUno) );
                width: 100%;
            }

            .info1 {
                background: white;
                width: calc( 850px * var(--sizeUno) );
                height: calc( 400px * var(--sizeUno) );
                padding: 20px;
                display: grid;
                grid-template-columns: 4fr 3.5fr 4fr 10px 4fr;
                align-items: center;
                transform: translateY(calc( -30% * var(--sizeUno) ));
                z-index: 200;
            }

            .description {
                background: #A99767;
                color: white;
                height: calc( 350px * var(--sizeUno) );
                width: 100%;
                z-idex: 1000;
                display: grid;
                grid-template-rows: 2fr 3fr 1fr;
                z-index: -1;
            }

            .info1 > img {
                width: 100%;
                transition: width 1s, box-shadow .5s, transform .5s;
                cursor: pointer;
            }

            h2{
                text-align: center;
                background: rgb(116, 100, 59);
                font-size: calc( 18px * var(--sizeUno) );
                align-self: flex-end;
                padding: calc( 5px * var(--sizeUno) );
            }

            p {
                font-size: calc( 12px * var(--sizeUno) );
                text-align: justify;
                padding: calc( 20px * var(--sizeUno) );
                line-height : calc( 20px * var(--sizeUno) );
                color: #ffffff88;
            }

            button {
                align-self: flex-start;
                justify-self: center;
                width: calc( 40px * var(--sizeUno) );
                height: calc( 40px * var(--sizeUno) );
                border-radius: 50%;
                border: none;
                background: none;
                outline: none;
                color: white;
                font-weight: 500;
                font-size: calc( 30px * var(--sizeUno) );
                cursor: pointer;
                transition: background 1s;
            }

            .description button:hover {
                background: rgb(116, 100, 59);
            }

            .info1 > img:hover {
                z-index: 100;
                transform: scale(1.05);
                box-shadow: -10px 10px 15px -5px #333333cc;
            }

            @keyframes deslizarTitulo {
                from {
                    transform: translate(150%);
                }

                to {
                    transform: translate(40%);
                }
            }

            @media screen and (max-width: 1000px) {
               :global(:root) {
                    --sizeUno: .8;
                } 
            }

            @media screen and (max-width: 750px) {
               :global(:root) {
                    --sizeUno: .6;
                } 

                .cont1 {
                    height: calc( 250px * var(--sizeUno) );
                }

            }

            @media screen and (max-width: 580px) {
               :global(:root) {
                    --sizeUno: .45;
                } 

                .cont1 {
                    height: calc( 300px * var(--sizeUno) );
                }

                .description {
                    height: calc( 480px * var(--sizeUno) );
                }

                .info1 {
                    height: calc( 530px * var(--sizeUno) );
                    grid-template-columns: 4fr 3.5fr 4fr;
                    transform: translateY(calc( -50% * var(--sizeUno) ));
                }

                .info1 > img:nth-child(5) {
                    display: none;
                }

                h2{
                    font-size: calc( 24px * var(--sizeUno) );
                    padding: calc( 15px * var(--sizeUno) );
                }

                p {
                    font-size: calc( 22px * var(--sizeUno) );
                    padding: calc( 20px * var(--sizeUno) );
                    line-height : calc( 20px * var(--sizeUno) );
                }
            }

            @media screen and (max-width: 430px) {
                :global(:root) {
                    --sizeUno: .3;
                } 

                .cont1 {
                    height: calc( 400px * var(--sizeUno) );
                }

                .description {
                    height: calc( 730px * var(--sizeUno) );
                }

                .info1 {
                    height: calc( 840px * var(--sizeUno) );
                    grid-template-columns: 4fr 3.5fr;
                    transform: translateY(calc( -100% * var(--sizeUno) ));
                }

                .info1 > img:nth-child(3) {
                    display: none;
                }

                h2{
                    font-size: calc( 34px * var(--sizeUno) );
                    padding: calc( 15px * var(--sizeUno) );
                }

                p {
                    font-size: calc( 30px * var(--sizeUno) );
                    padding: calc( 25px * var(--sizeUno) );
                    line-height : calc( 35px * var(--sizeUno) );
                }
            }
            
        `}</style>
    </React.Fragment>

    )

}

export default AmbienteUno