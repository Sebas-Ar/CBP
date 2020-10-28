import React, { useEffect, useState } from 'react'
import { Element, scroller } from 'react-scroll';
import { useRouter } from 'next/router'


//Components
import AmbienteUno from '../../components/ambiente/AmbienteUno';
import AmbienteDos from '../../components/ambiente/AmbienteDos';
import AmbienteTres from '../../components/ambiente/AmbienteTres';
import Layout from '../../components/layout/Layout';

//configuraciones del autoScroll
const setupScroll = {
    duration: 10000,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”,
    offset: -10
}

const setupScroll3 = {
    duration: 10000,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic”,
    offset: 100
}

// bajar volumen
const volumenDown = (name, time) => {
    let cuenta = setInterval(() => {
        if (document.getElementById(name)) {
            if (document.getElementById(name).volume > .01) {
                document.getElementById(name).volume -= .01
            } else {
                clearInterval(cuenta)
                document.getElementById(name).pause()

            }
        } else {
            clearInterval(cuenta)
        }
    }, time);
}

// subir volumnen
const volumenUp = (name, time) => {
    if (audio) {
        document.getElementById(name).play()
        let cuent = setInterval(() => {
            if (document.getElementById(name)) {
                if (document.getElementById(name).volume < 0.99) {
                    document.getElementById(name).volume += .01
                } else {
                    clearInterval(cuent)

                }
            } else {
                clearInterval(cuent)
            }
        }, time);
    }
}

const Ambiente = () => {

    const { zona } = useRouter().query
    
    const [audio, setAudio] = useState(true);
    const [level1, setlevel1] = useState(false);
    const [level2, setlevel2] = useState(false);

    const trueLevel1 = () => {
        setlevel1(true)
    }

    const falseLevel1 = () => {
        setlevel1(false)
    }

    const trueLevel2 = () => {
        setlevel2(true)
    }
    
    const falseLevel2 = () => {
        setlevel2(false)
    }

    //Activa/Desactiva la melodia 1 o 2
    useEffect(() => {
        if (audio) {
            if (!level1) {
                volumenUp('audio', 10)
                volumenDown('audio2', 10)
                volumenDown('audio3', 10)
            } else {
                volumenDown('audio', 10)
                volumenUp('audio2', 10)
                volumenDown('audio3', 10)
            }
        }
    }, [level1]);

    //Activa/Desactiva la melodia 2 o 3
    useEffect(() => {
        if (audio) {
            if (level1 && !level2) {
                volumenDown('audio', 10)
                volumenUp('audio2', 10)
                volumenDown('audio3', 10)
    
            } else if (level1 && level2) {
                volumenDown('audio2', 10)
                volumenUp('audio3', 10)
                volumenDown('audio', 10)
            }
        }
    }, [level2]);

    //Mueve el scroll a la zona especificada por el Router
    useEffect(() => {
            if(zona === 'terraza-rooftop') {
                scroller.scrollTo("primero", setupScroll);
            } else if (zona === 'salon-privado') {
                scroller.scrollTo("segundo", setupScroll);
            } else if (zona === 'terraza-del-mar') {
                scroller.scrollTo("tercero", setupScroll3);
            }       
    }, [zona]);

    //maneja el botón de Pausa/Play
    const onClick = () => {
        if (audio) {
            document.getElementById('audio').pause()
            document.getElementById('audio2').pause()
            document.getElementById('audio3').pause()
            setAudio(false)
        } else {
            if (!level1) {
                document.getElementById('audio').play()
                document.getElementById('audio').volume = 1
            } else {
                if (!level2) {
                    document.getElementById('audio2').play()
                    document.getElementById('audio2').volume = 1
                } else {
                    document.getElementById('audio3').play()
                    document.getElementById('audio3').volume = 1
                }
            }
            setAudio(true)
        }
    }

    return (
    
    <Layout>

        <audio id="audio" src="/audio/audio.mpeg" loop autoPlay></audio>
        <audio id="audio2" src="/audio/audio2.mp3" loop></audio>
        <audio id="audio3" src="/audio/audio3.mp3" loop></audio>

        <button onClick= {onClick}>
            &#9835;
        </button>

        <Element name="primero">
            <AmbienteUno />
        </Element>

        <Element name="segundo">
            <AmbienteDos trueLevel1={trueLevel1} falseLevel1={falseLevel1}  />
        </Element>

        <Element name="tercero">
            <AmbienteTres trueLevel2={trueLevel2} falseLevel2={falseLevel2} />
        </Element>

        <style jsx>{`
            button {
                position: fixed;
                border: none;
                outline: none;
                background: ${audio ? "#F1D58C" : "#A99767"};
                right: 20px;
                top: 100px;
                width: 50px;
                height: 50px;
                color: ${ audio ? 'white' : 'rgb(206, 197, 173)'};
                border-radius: 50%;
                font-size: 30px;
                z-index: 1000;
                transition: background .1s, color .1s;
                box-shadow: 3px -3px 10px -4px #000000aa;
                cursor: pointer;
            }

            button:before {
                opacity: ${ audio ? '0' : '1'};
                position: absolute; 
                content: "";
                height: 100%;
                width: 5px;
                left: 50%;
                top: 0;
                transition: opacity .3s;
                transform: translateX(-50%) rotate(-45deg);
                background-color: rgb(206, 197, 173); 
            }

            button:hover:before {
                opacity: ${ audio ? '1' : '0'};
            }

            button:hover {
                background: ${audio ? '#A99767' : '#F1D58C' };
                color: ${audio ? 'rgb(206, 197, 173)' : 'white'} ;
            }

        `}</style>

    </Layout>
    
    )
}

export default Ambiente