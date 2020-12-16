import React, { useState, useRef, useEffect } from 'react'
import Layout from '../components/layout/Layout';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Historia = () => {

    //Identifica la imagen en el scroll
    const [img, setimg] = useState(0);
    //Marca la direccion del scroll
    const [direccion, setDireccion] = useState(true);
    //Guarda la posicion del Scroll respecto al elemento
    const [tit1, setTit1] = useState({ x: 20, y: 150 })
    const [tit2, setTit2] = useState({ x: 20, y: 150 })
    const [tit3, setTit3] = useState({ x: 20, y: 150 })
    //Identifica si los elementos son vistos
    const [visto1, setvisto1] = useState(false);
    const [visto2, setvisto2] = useState(false);
    const [visto3, setvisto3] = useState(false);
    //Identifica los Elementos
    const titulo1 = useRef()
    const titulo2 = useRef()
    const titulo3 = useRef()

    //toma la posicion del escroll respecto al elemento 1
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.5);
        setTit1({ x, y })
    }, [], titulo1)

    //toma la posicion del escroll respecto al elemento 2
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.5);
        setTit2({ x, y })
    }, [], titulo2)

    //toma la posicion del escroll respecto al elemento 3
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.5);
        setTit3({ x, y })
    }, [], titulo3)

    //Activa/Desactiva las animaciones del Scroll
    useEffect(() => {
        if (tit1.y < 0) {
            setvisto1(true)
        } else {
            setvisto1(false)
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
    }, [tit1, tit2, tit3]);

    //Activa el slider
    useEffect(() => {
        console.log('tiem');
        const time = setTimeout(()=> {
            if (direccion) {
                setimg(img + 1)
                if (img >= 2) setDireccion(!direccion)
            } else {
                setimg(img - 1)
                if (img <= 1) setDireccion(!direccion)
            }
        },3000)
        return () => {
            clearTimeout(time)
        };
    });

    //Evita que se desfase el slider
    useEffect(() => {
        if (img < 0) setimg(0)
        if (img > 3) setimg(3)   
    }, [img]);

    //Cambia la posicion del Slider
    const onClick = (num) => {
        setimg(num)
    }

    return (
    
    <Layout>
        <div className="content">
                <img className="fondo1" src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia1.jpg" alt=""/>
            <div className="cont1">
                <div className="info1">
                    <img className="img1" src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia2.jpg" alt="sala del restaurante"/>
                    <div ref={titulo1}>
                        <h2>CASCO ANTIGUO, CORAZÓN DE PANAMÁ</h2>
                        <p>Fundada estratégicamente sobre una península en 1673 una vez Panamá La Vieja fue saqueada por el pirata inglés Henry Morgan. <br/><br/>
                            Centro de vida panameña por más de 300 años, deja un legado de desarrollo arquitectónico español, francés, colonial americano y neoclásico. 
                        </p>
                    </div>
                    <h1 ref={titulo2}>NUESTRA HISTORÍA</h1>
                    <img className="img2" src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia3.jpg" alt="meero sirviendo un vino"/>
                </div>
            </div>
            <div className="slider">
                <div className="sliderImg">
                    <ul style={{ marginLeft: img === 0 ? "0%" : img === 1 ? "-100%" : img === 2 ? "-200%" : "-300%" }}>
                        <div className="slide1 slide"></div>
                        <div className="slide2 slide"></div>
                        <div className="slide3 slide"></div>
                        <div className="slide4 slide"></div>
                    </ul>
                </div>
                <h1 ref={titulo3}>Capital Bistró Panamá </h1>
                <p>opera desde el edificio donde se instaló el primer de Cuerpo de Bomberos de Panamá, cuando el centro de la ciudad era el actual Casco Antiguo de Panamá, en el siglo XIX. 
                    • Esta linda causalidad motiva el nombre actual de Capital Bistró Panamá al ser de nuestro interés mantener las siglas C B P que forman parte del edificio histórico en cual operamos. 
                </p>
            </div>
            <div className="cont2">
                <img src="/img/oreja2.png" alt=""/>
                <div className="info2">
                    <img src="/img/Grupo-9.png" onClick={() => {onClick(0)}} alt="bebida"/>
                    <img src="/img/cocktail-1.png" onClick={() => {onClick(1)}} alt="cóctel"/>
                    <img src="/img/spaguetti-1.png" onClick={() => {onClick(2)}} alt="spaguetti"/>
                    <img src="/img/wine.png" onClick={() => {onClick(3)}} alt="vino"/>
                    <h4 className="h1" onClick={() => {onClick(0)}}>COCTELES</h4>
                    <h4 className="h2" onClick={() => {onClick(1)}}>LICORES</h4>
                    <h4 className="h3" onClick={() => {onClick(2)}}>BEBIDAS</h4>
                    <h4 className="h4" onClick={() => {onClick(3)}}>PLATOS FUERTES</h4>
                </div>
                <img src="/img/oreja1.png" alt="" />
            </div>

            <style jsx>{`

                .h1 {
                    background-color: ${img === 0 ? "#A99767" : ""};
                    color: ${img === 0 ? "white" : ""}
                }
                .h2 {
                    background-color: ${img === 1 ? "#A99767" : ""};
                    color: ${img === 1 ? "white" : ""}
                }
                .h3 {
                    background-color: ${img === 2 ? "#A99767" : ""};
                    color: ${img === 2 ? "white" : ""}
                }
                .h4 {
                    background-color: ${img === 3 ? "#A99767" : ""};
                    color: ${img === 3 ? "white" : ""}
                }
                
                .info1 > div > h2, .info1 > div > p {
                    transform: ${visto1 ? '' :'translate(100vw)' }
                }

                .info1 > h1 {
                    transform: ${visto2 ? '' :'translate(-100vw)' }
                }

                .slider > h1 {
                    transform: ${visto3 ? '' : 'translate(100vw)' }
                }

                .slider > p {
                    transform: ${visto3 ? '' : 'translate(-100vw)' }
                }
                
            `}</style>

            <style jsx>{`

                .slide {
                    height: 100%;
                    width: 100%;
                    background-size: 100% auto;
                }

                .slide1 {
                    background-image: url('/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia-s1.jpg');
                }
                .slide2 {
                    background-image: url('/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia-s2.jpg');
                }
                .slide3 {
                    background-image: url('/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia-s3.jpg');
                }
                .slide4 {
                    background-image: url('/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia-s4.jpg');
                }

                ul {
                    width: 400%;
                    height: 480px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    transition: margin-left 1.5s ease;
                }

                .sliderImg {
                    width: 100%;
                    position: absolute;
                    overflow: hidden;
                }

                .slider {
                    background-image: none;
                    background-size: 100% 100%;
                    width: 100%;
                    height: 480px;
                    z-index:100;
                    color: white;
                    overflow: hidden;
                    display: grid;
                    grid-template-rows: 5fr 3fr;
                    justify-items: center;
                }

                .slider > h1 {
                    align-self: flex-end;
                    font-size: 65px;
                    transition: transform 1s;
                    z-index:100;
                    width: 100%;
                    text-align: center;
                    background-color: #2F1D16aa;
                }

                .slider > p {
                    text-align: center;
                    width: 55%;
                    line-height: 25px;
                    color: #eee;
                    transition: transform 1s;
                    z-index:100;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 25%;
                    align-self: flex-start;
                    background-color: #2F1D16aa;
                }

                .fondo1 {
                    width: 100%;
                    z-index:100;
                }

                .cont1 {
                    backgroundo: white;
                    display: grid;
                    justify-items:center;
                    height: 200px;
                    width: 100%;
                }

                .info1 {
                    background: white;
                    width: 60%;
                    height: 90%;
                    padding: 20px;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    grid-template-rows: 1fr 1fr;
                    transform: translateY(-25%);
                    z-index: 200;
                }

                .info1 > h1 {
                    text-align: center;
                    padding: 40px 20px 20px;
                    font-size: 45px;
                    font-weight: 900;
                    color: #A99767;
                    transition: transform 1s;
                }

                .info1 > div {
                    padding: 30px;
                    overflow: hidden;
                }

                .info1 > div > h2 {
                    margin-bottom: 20px;
                    color: #A99767;
                    transition: transform 1s;
                }
                
                .info1 > div > p {
                    text-align: justify;
                    transition: transform 1.5s;
                }

                .img1 {
                    width: 100%;
                    transition: transform .5s, box-shadow .5s;
                }

                .img1:hover {
                    box-shadow: -10px -10px 7px -5px #333333aa;
                    transform: scale(1.03);
                }

                .img2 {
                    width: 100%;
                    transition: transform .5s, box-shadow .5s;
                }

                .img2:hover {
                    box-shadow: 10px 10px 7px -5px #333333aa;
                    transform: scale(1.03);
                }

                .slider {
                    width: 100%;
                    z-index:100;
                }

                .cont2 {
                    width: 100%;
                    height: 300px;
                    background: white;
                    display: grid;
                    height: 200px;
                    grid-template-columns: 18.5% 63% 18.5%;
                }

                .cont2 > img {
                    height: 60%;
                    margin: 10px 0;
                }

                .cont2 > img:nth-child(3) {
                    margin: 40px 0;
                    justify-self: flex-end;
                }

                .info2 {
                    padding: 20px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 4fr 1fr;
                    height: 200px;
                    transform: translateY(-60px);
                    background: white;
                    padding-top: 50px;
                }

                .info2 > img {
                    align-self: center;
                    justify-self: center;
                    height: 80px;
                    cursor: pointer;
                }

                .info2 > h4 {
                    text-align: center;
                    justify-self: center;
                    align-self: center;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    transition: background .5s, color .5s;
                }

                .info2 > h4:hover {
                    color: white;
                    background-color: #A99767;
                }
            `}</style>
        </div>
    </Layout>
    
    )
}

export default Historia