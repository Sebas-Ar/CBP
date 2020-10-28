import React, { useState, useEffect } from 'react'
import TextoTime from './TextoTime';

const SliderInit = () => {

    const momentoActual = new Date()
    const [img, setImg] = useState(0);
    const [direccion, setDireccion] = useState(true);
    const [time, setTime] = useState('')
    
    //Obtiene la hora
    useEffect(() => {
        if (momentoActual.getHours()< 12) {
            setTime('MAÑANA')
        } else if (momentoActual.getHours() < 19) {
            setTime('TARDE')
        } else {
            setTime('NOCHE')
        }
    }, []);

    //Activa el slider
    useEffect(() => {
        const tiempo = setTimeout(() => {
            if (direccion) {
                setImg(img + 1)
                if (img >= 1) setDireccion(!direccion)
            }else {
                setImg(img - 1)
                if (img <= 1) setDireccion(!direccion)
            }
        },4000)
        console.log();
        return () => {
            clearTimeout(tiempo)
        }
    }, [img]);

    //Para evitar que se desfase el slider
    useEffect(() => {
        if (img < 0) setImg(0)
        if (img > 2) setImg(2)  
    }, [img]);

    //Mover el slider
    const izquierda = () => {
        if (img > 0) {
            setImg(img - 1)
        }
    }

    //Mover el slider
    const derecha = () => {
        if (img < 2) {
            setImg(img + 1)
        }
    }    

    return (
    <div className="container">

        <button className="izquierda" onClick={izquierda}>&lsaquo;</button>
        <button className="derecha" onClick={derecha}>&rsaquo;</button>

        <ul>
            <li>
                    <TextoTime h2={'RESTAURANT'} h3={'CAPITAL BISTRÓ PANAMÁ'} p={'Disfruta de platos exquisitos en un ambiente mágico en medio del casco antiguo de Panamá.'} img={'"/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-sl-2.jpg"'} />
            </li>
            <li>
                    <TextoTime h2={'ROOFTOP'} h3={'CAPITAL BISTRÓ PANAMÁ'} p={'Encanta a tus invitados disfrutando de la mejor comida de Panamá con una vista inigualable del mar y la ciudad.'} img={'"/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-sl-3.jpg"'} />
            </li>
            <li>
                    <TextoTime h2={'ALIMENTA TODOS LOS SENTIDOS'} h3={'CAPITAL BISTRÓ PANAMÁ'} p={'Un delicioso plato acompañado de una copa de tu bebida favorita al tacto de la brisa del mar y observando la más hermosa vista de Panamá, es una experiencia CBP. '} img={'"/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-sl-1.jpg"'} />
            </li>
        </ul>

        <style jsx>{`

            ul {
                margin-left: ${ img === 0 ? "0%" : img === 1 ? "-100%" : "-200%"}
            }    
            
        `}</style>


        <style jsx>{`

            :global(:root) {
                --sizeSliderInit: 1;
            }

            .container {
                width: 100%;
                overflow: hidden;
                height: 100vh;
            }

            button {
                background: none;
                border: none;
                font-size: 40px;
                font-weight: 500;
                position: fixed;
                color: white;
                cursor: pointer;
                outline:none;
            }

            .izquierda {
                left: calc( 60px * var(--sizeSliderInit) );
                top: 50%;
            }
            
            .derecha {
                right: calc( 60px * var(--sizeSliderInit) );
                top: 50%;
            }


            ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                width: 300%;
                transition: margin-left 1.5s ease;
                height: 100vh;
            }

            li {
                list-style: none;
                width: 100%;
                height: 100vh;
                display: grid;
            }

            @media screen and (max-width: 780px) {
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
}

export default SliderInit