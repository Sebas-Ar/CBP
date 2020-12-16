import React, { useState, useRef, useEffect, Fragment } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


const AmbienteDos = (props) => {

    //Guarda la posicion del Scroll respecto al elemento
    const [tit1, setTit1] = useState({ x: 20, y: 150 })
    const [tit2, setTit2] = useState({ x: 20, y: 150 })
    const [tit3, setTit3] = useState({ x: 20, y: 150 })
    //Identifica si los elementos son vistos
    const [visto, setvisto] = useState(false);
    const [visto2, setvisto2] = useState(false);
    const [visto3, setvisto3] = useState(false);
    //Identifica los Elementos
    const titulo1 = useRef()
    const titulo2 = useRef()
    const titulo3 = useRef()

    //Toma la posición del elemnto 'titulo1' respcto al scroll
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.5);
        setTit1({x, y})
    }, [], titulo1)

    //Toma la posición del elemnto 'titulo2' respcto al scroll
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.5);
        setTit2({ x, y })
    }, [], titulo2)

    //Toma la posición del elemnto 'titulo3' respcto al scroll
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 2);
        setTit3({ x, y })
    }, [], titulo3)

    //Activa las animaciones
    useEffect(() => {
        if (tit1.y < 0) {
            setvisto(true)
            props.trueLevel1()
        } else {
            props.falseLevel1()
            setvisto(false)
        }

        if (tit2.y < 0) {
            setvisto2(true)
        } else {
            setvisto2(false)
        }

        if (tit3.y < 0) {
            setvisto3(true)
        } else {
            setvisto3(false)
        }
        
    }, [tit1]);

    return (
    <React.Fragment>
        
        <div className="slider" ref={titulo3}>
            <div className="container">
                <h1 style={{
                    transform: visto3 ? 'translate(0)' : 'translate(-100vw)'
                }}>VIAJA AL PASADO DE PANAMÁ</h1>
                <p style={{
                    transform: visto3 ? 'translate(0)' : 'translate(100vw)'
                }}>El salón privado es un espacio cómodo, silencioso y discreto que busca devolveros en el tiempo a una era donde la lucha por mejores posibilidades marcó los cimientos de lo que Panamá es hoy en día. </p>
            </div>
        </div>

        <div className="titulo" ref={titulo1}>
            <div className="lineatit"></div>
            <h1 style={{
                transform: visto ? 'translateY(0)' : 'translateY(-100%)'
            }}>SALÓN PRIVADO</h1>
            <div className="lineatit"></div>
        </div>

        <div className="cont2">
            <div className="lineas3">
                <div className="l1"></div>
                <div className="l1"></div>
                <div className="l1"></div>
            </div>
            <div className="info2">
                <div className="img img1"></div>
                <div className="img img2"></div>
                <div className="img img3"></div>
                <div className="img img4"></div>
            </div>
            <div ref={titulo2} className="texto">
                <h2 style={{
                    transform: visto2 ? 'translate(0%)' : 'translate(150%)'
                }}>PRIVADO, ACOGEDOR Y ESPECIAL</h2>
                <p style={{
                    transform: visto2 ? 'translate(0%)' : 'translate(150%)'
                    }}>Eventos personales y corporativos, cenas especiales o casuales, la primera comunión de los pequeños o la boda civil de tus sueños, celébralos con piano en vivo y ventanales hacia la mejor vista de la ciudad
                </p>
            </div>
        </div>

        <style jsx>{`

            :global(:root) {
                --sizeDosSlide: 1;
                --sizeDosTit: 1;
            }

            .slider {
                background-image: url('/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb4.jpg');
                background-size: auto 100% ;
                width: 100%;
                height: 480px;
                z-index:100;
                color: white;
                overflow: hidden;
                display: grid;
                align-content: center;
                justify-items: center;
            }

            .slider > .container {
                width: 100%;
                background-color: #2F1D16aa;
                padding: 30px 0;
            }

            .slider  h1 {
                text-align: center;
                margin: auto;
                align-self: flex-end;
                padding-bottom: 20px;
                font-size: calc( 35px * var(--sizeDosSlide) );
                transition: transform 1s;
            }

            .slider p {
                margin: auto;
                text-align: center;
                font-size: calc( 1rem * var(--sizeDosSlide) );
                width: calc( 400px * var(--sizeDosSlide) );
                line-height: 30px;
                color: #fff;
                transition: transform 1s;
            }
            
            .lineas3 {
                width: 100%;
                height: 100%;
            }

            .l1 {
                width: 100%;
                height: 10px;
                background: #A9976799;
                margin-bottom: 25px;
            }

            .texto {
                background: #A9976799;
                height: 250px;
                display: grid;
                overflow: hidden;
                padding-left: 30px;
            }

            .texto > h2 {
                font-size: 27px;
                align-self: flex-end;
                transition: transform 1s;
                border-left: 5px solid black;
                padding-left: 20px;
                padding-bottom: 5px;

            }

            .texto > p {
                border-left: 5px solid black;
                align-self: flex-start;
                text-align: justify;
                color: #222222dd;
                transition: transform 1s .3s;
                padding-left: 20px;
                padding-top: 5px;
                margin-right: 40px;
            }
            .img {
                width: 310px;
                height: 100%;
                background-size: 100% 100%;
                transition: width 1s, height 1s, transform 1s, box-shadow 1s;
                z-index: 1;
            }

            .img:hover {
                transform: scale(1.05);
                z-index: 10;
            }

            .img1 {
                background-image: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb5.jpg");
                margin: 0 10px 10px 0;
            }
            .img1:hover {
                box-shadow: -10px -10px 15px -7px #555555;
            }
            .img2 {
                background-image: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb6.jpg");
                margin: 0 0 10px 10px;
            }
            .img2:hover {
                box-shadow: 10px -10px 15px -7px #555555;
            }
            .img3 {
                background-image: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb7.jpg");
                margin: 10px 10px 0 0;
            }
            .img3:hover {
                box-shadow: -10px 10px 15px -7px #555555;
            }
            .img4 {
                background-image: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb8.jpg");
                margin: 10px 0 0 10px;
            }
            .img4:hover {
                box-shadow: 10px 10px 15px -7px #555555;
            }

            .cont2 {
                margin-top: 100px;
                background: white;
                display: grid;
                grid-template-columns: 1fr 5fr 5fr;
                justify-items:center;
                height: 250px;
                width: 100%;
            }

            .info2 {
                background: none;
                width: 100%;
                height: 400px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                align-items: center;
                z-index: 200;
                transform: translateY(-25%);
            }

            .titulo {
                display: grid;
                grid-template-columns: 6fr 5fr 6fr;
                align-items: center;
            }

            .titulo > h1 {
                color: #A9976799;
                padding: 50px 10px 50px 10px;
                font-size: calc( 28px * var(--sizeDosTit) );
                text-align: center;
                z-index:-1;
                transition: transform 1s;
            }

            .lineatit {
                height: 2px;
                width: 100%;
                background: #aaaaaa;
            }

            @media screen and (max-width: 530px) {
                :global(:root) {
                    --sizeDosSlide: .8;
                    --sizeDosTit: .8;
                }

                .titulo {
                    grid-template-columns: 6fr 11fr 6fr;
                }
            }

            @media screen and (max-width: 400px) {
                :global(:root) {
                    --sizeDosSlide: .6;
                    --sizeDosTit: .6;
                }
            }

        `}</style>
    
    </React.Fragment>
    
    )
}

export default AmbienteDos