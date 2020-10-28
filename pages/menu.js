import React, { useState } from 'react'
import NavMenu from '../components/menu/NavMenu'
import Layout from '../components/layout/Layout'

const Menu = () => {

    //posición del menú principal
    const [menuP, setMenuP] = useState(1)

    //Función enviada al NavMenu para cambiar la posición del menú principal
    function change(valor) {
        setMenuP(valor)
    }

    return (
    
    <Layout> 
        <div className="content">
            <div className="left">
                <div className="two">
                    <div className="image">
                        <img className="img1" src={menuP === 1 ? "/img/comida1.png" : menuP == 2 ? "/img/comida2.png" : menuP == 3 ? "/img/comida1.png" : menuP == 4 ? "/img/comida2.png" : "/img/comida2.png"} alt="comida"/>
                        <img className="img2" src={menuP === 1 ? "/img/comida1.png" : menuP == 2 ? "/img/comida2.png" : menuP == 3 ? "/img/comida2.png" : menuP == 4 ? "/img/comida1.png" : "/img/comida2.png"} alt="comida"/>
                    </div>
                    <div className="sinColor"></div>
                </div>
                <div className="portada"></div>
            </div>

            <NavMenu change={change} />

            <style jsx>{`
                .content {
                    width: 100%;
                    height:100vh;
                    display:grid;
                }

                .left {
                    width: 40vw;
                    position: fixed;
                    display: grid;
                    grid-template-columns: 1.3fr 1fr;
                }

                .two {
                    background: #A99767;
                    display: grid;
                    height: 100vh;
                    grid-template-rows: 8fr 1fr;
                }

                .image {
                    margin: 10px;
                    justify-self: flex-end;
                    align-self: flex-end;
                    display: grid;
                    justify-items: flex-end;
                    transform: translateY(30px);
                }

                .img1 {
                    height:200px;
                }

                .img2 {
                    margin-top:20px;
                    height:200px;
                }

                .portada {
                    background-image: url("/img/Layer-7-copia.png");
                    background-size: auto 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }

                .sinColor {
                    background: white;
                }
            `}</style>
        </div>
    </Layout>
    
    )
}

export default Menu