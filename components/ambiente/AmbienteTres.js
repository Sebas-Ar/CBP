import React, { useState, useRef, useEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


const AmbienteTres = (props) => {

    //Guarda la posicion del Scroll respecto al elemento
    const [tit1, setTit1] = useState({x : 0, y: 0});
    const [tit2, setTit2] = useState({ x: 0, y: 0 });
    //Identifica si los elementos son vistos
    const [visto1, setVisto1] = useState(false);
    const [visto2, setVisto2] = useState(false);
    //Identifica los Elementos
    const titulo1 = useRef()
    const titulo2 = useRef()

    //Toma la posición del elemnto 'titulo1' respcto al scroll
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.5);
        setTit1({ x, y })
    }, [], titulo1
    )

    //Toma la posición del elemnto 'titulo2' respcto al scroll
    useScrollPosition(({ currPos }) => {
        let { x, y } = currPos;
        y -= (screen.height / 1.2);
        setTit2({ x, y })
    }, [], titulo2
    )

    //Activa las animaciones
    useEffect(() => {

        if (tit1.y < 0) {
            setVisto1(true)
        } else {
            setVisto1(false)
        }
        
        if (tit2.y < 0) {
            props.trueLevel2()
            setVisto2(true)
        } else {
            props.falseLevel2()
            setVisto2(false)
        }

    }, [tit1]);

    return (
    <React.Fragment>
        <div className="cont3">
            <div className="imgfondo">
                <h2 ref={titulo1} style={{
                    transform: visto1 ? 'translate(0)' : 'translate(-50vw)'
                }}>VISTA AL MAR Y LA CIUDAD</h2>
                <div className="lin" style={{
                    transform: visto1 ? 'translate(0)' : 'translate(-50vw)'
                }}></div>
                <div className="imagenes">
                        <img className="grande" src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb10.jpg" alt="" />
                    <div className="pequeña peq1"></div>
                    <div className="pequeña peq2"></div>
                </div>
            </div>
            <div ref={titulo2} className="texto2">
                <div></div>
                <h2 style={{
                    transform: visto2 ? 'translate(0)' : 'translate(-50vw)'
                }}>TERRAZA AL MAR</h2>
                <p style={{
                    transform: visto2 ? 'translateY(0)' : 'translateY(-50vh)'
                    }}>Nuestra terraza del mar es la favorita de nuestros dueños, la vista de la metrópolis es adornada de la costa presidencial, la cual podrás escuchar mientras disfrutas de una cena sin igual.</p>
            </div>
            <div className="color">
                <img className="plato" src="/img/plato.png" alt="" />
            </div>

        </div>

        <style jsx>{`
            
            .plato {
                height: 250px;
                position: absolute;
                bottom: 0;
            }

            .texto2 {
                width: 50%;
                display: grid;
                grid-template-columns: 2fr 1fr 3fr;
                grid-column-gap: 50px;
                align-self: center;
            }

            .texto2 > h2 {
                font-size: 36px;
                padding: 10px;
                transition: transform 1s;
                width: 80px;
            }

            .texto2 > p {
                align-self: center;
                text-align: justify;
                margin: 0 25px;
                color: #00000099;
                z-index: -1;
                transition: transform 1s .3s;
            }

            .cont3 {
                display:grid;
                grid-template-rows: 4fr 3fr 1fr;
            }

            .color {
                background: #444444;
                height:130px;
                position: relative;
            }

            .imagenes {
                grid-column: 2/3;
                grid-row: 1/3;
                transform: translateY(30%);
                display: grid;
                grid-template-columns: 4fr 5fr;
                grid-template-rows: 2fr 1fr;
                z-index: 10;
            }

            .grande {
                width: 100%;
                height:;
                grid-column: 1/3;
                transition: transform 1s, box-shadow 1s;
            }

            .grande:hover {
                transform: scale(1.02) translate(-10px);
                box-shadow: -12px 12px 15px -5px #33333366;
            }

            .pequeña {
                margin-right: 20px;
                width: 90%;
                height: 200px;
                margin: 10px 10px 0 0;
                background-size: 100% 100%;
                transition: transform 1s, box-shadow 1s;
            }

            .pequeña:hover {
                transform: scale(1.07);
                box-shadow: -12px 12px 15px -5px #33333366;
            }

            .peq1 {
                background-image: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb11.jpg");
            }

            .peq2 {
                background-image: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb12.jpg");
            }

            .imgfondo > h2 {
                color: white;
                text-align: right;
                align-self: flex-end;
                justify-self: flex-end;
                font-size: 50px;
                margin-right: 20px;
                margin-bottom: 40px;
                transition: transform 1s .3s;
            }

            .lin {
                background: white;
                height: 6px;
                width: 100px;
                justify-self: flex-end;
                margin-right: 20px;
                transition: transform 1s;
            }

            .imgfondo {
                width: 100%;
                height: 500px;
                background: url("/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-amb9.jpg");
                background-size: cover;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 5fr 3fr;
            }
            
        `}</style>
    </React.Fragment>
    
    )
}

export default AmbienteTres