import React from 'react'

const TextoTime = (props) => (

    <div className="img">
        <div className="item">
            <div className="cuadro">
                <h3>{props.h3}</h3>
            </div>
            <div className="text">
                <h2>{props.h2}</h2>
                <div className="linea"></div>
                <p>{props.p}</p>
            </div>
        </div>

        <style jsx>{`
        
        .text {
            margin: 0 20px;
            display: grid;
        }

        .linea {
            height: 2px;
            width: calc( 200px * var(--sizeSliderInit) );
            background: white;
            margin: calc( 15px * var(--sizeSliderInit) ) 0;
        }

        p {
            text-align: justify;
        }

        .item {
            display: grid;
            grid-template-columns: 1fr 3fr;
            width: calc( 600px * var(--sizeSliderInit) );
            color: white;
            margin-bottom: 110px;
        }

        h2 {
            font-size: calc( 30px * var(--sizeSliderInit) );
        }

        h3 {
            color: white;
            margin: 10px;
            padding: 10px;
        }
        
        .cuadro {
            height: 130px;
            width: 130px;
            background: url("/img/Grupo-1209.png");
            background-size: 100% 100%;
            display: grid;
            align-self:center;
            justify-self:center;
        }    

        .img {
            background-image: url(${props.img});
            background-position: center center ;  
            background-size: 100% auto;
            display: grid;
            align-items: center;
            justify-items: center;
        }

        @media screen and (max-width: 1140px) {
            .img {
                background-size: auto 100% ;
            }
        }

        @media screen and (max-width: 780px) {
            .item {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 2fr 1fr;
            }

            .cuadro {
                margin: 40px;
            }

            h2, p {
                text-align: center;
            }

            .linea {
                justify-self: center; 
            }

            :global(:root) {
                --sizeSliderInit: .7;
            }
        }

        @media screen and (max-width: 450px) {
            :global(:root) {
                --sizeSliderInit: .6;
            }
        }

        @media screen and (max-width: 360px) {
            :global(:root) {
                --sizeSliderInit: .5;
            }
        }
    
    `}</style>

    </div>
)

export default TextoTime
