import React, { useState, useEffect } from 'react';


const Whatsapp = (props) => {

    const [activacion, setActivacion] = useState(props.whats);
    const [mensaje, setMensaje] = useState("");
    const [dispositivo, setDispositivo] = useState("");
    const [cuenta, setCuenta] = useState({ total: 0, desk: 0, movil: 0 });

    useEffect(() => {
        setActivacion(props.whats)
    }, [props.whats]);

    useEffect(() => {
        var mobile = {
            Android() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any() {
                return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows());
            }
        };

        try {

            setDispositivo(mobile.any()[0])

            if (!activacion) {
                setCuenta({ total: cuenta.total, movil: cuenta.movil + 1, desk: cuenta.desk })
            }
        }
        catch {
            setDispositivo('Desktop')

            if (!activacion) {
                setCuenta({ total: cuenta.total, movil: cuenta.movil, desk: cuenta.desk + 1 })
            }
        }
    }, []);

    const toggleWhatsapp = () => {
        setActivacion(!activacion)
        props.change(!activacion)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const msg = mensaje;
        const numero = "";

        if (dispositivo !== 'Desktop') {
            window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${msg}`, '_blank');
        } else {
            window.open(`https://web.whatsapp.com/send?phone=${numero}&text=${msg}`, '_blank');
        }

        setMensaje("")
        setActivacion(false)
    }

    const onChange = (e) => {
        setMensaje(e.target.value)
    }

    return (
        <div className="Whatsapp">
            <div className="formulario" id="toggle">
                <button className="close" onClick={toggleWhatsapp}>
                    <svg className="equis" viewBox="0 0 352 512">
                        <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                    </svg>
                </button>
                <div>
                    {/* <div className="logo"> */}
                    <img src="/img/Grupo-1101.png" alt="logo" />
                    {/* </div> */}
                    <p className="escribenos">Escribenos, pronto resolveremos tus dudas</p>
                    <p className="color">Hola ¿Cómo podemos ayudarte?</p>
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Dejanos un mensaje aquí..."
                        onChange={onChange}
                        value={mensaje} />
                    <button type="submit" className="enviar"><svg className="flecha" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></button>
                </form>
            </div>

            <style jsx>{`
                .formulario {
                    opacity: ${activacion ? "1" : "0"};
                    transform: ${activacion ? "" : "translateY(150%)"}
                }
            `}</style>

            <style jsx>{`

                .equis {
                    width: 50%;
                    margin: auto;
                }

                .flecha {
                    width: 10px;
                    color: #967961;
                }

                .formulario {
                    position: fixed;
                    left: 35px;
                    bottom: 100px;
                    height: 300px;
                    width: 240px;
                    text-align: center;
                    display: grid;
                    grid-template-rows: 40px 1fr 1fr;
                    grid-template-columns: 6fr 1fr;
                    z-index: 8000;
                    transition: transform 1s, opacity 1s, display 1s;
                }

                .formulario .close{
                    grid-column: 1/3;
                    justify-self: flex-end;
                    background: var(--mainColor);
                    border-radius: 50%;
                    border: none;
                    height: 30px;
                    width: 30px;
                    box-shadow: 0 0 80px 5px #00000011;
                    outline: none;
                    color: white;
                    cursor: pointer;
                    display: grid;
                    align-items: center;
                }

                .formulario .close:hover,  .accionar:hover{ 
                    background: rgb(204, 171, 88);
                }

                .formulario > div {
                    grid-column: 1/3;
                    border-radius: 15px 15px 15px 15px;
                    background: var(--mainColor);
                    color: white;
                    box-shadow: 5px 5px 10px 0px #00000077;
                }

                .formulario .escribenos {
                    padding: 0px 20px 20px 20px;
                }

                .formulario .logo {
                    margin: 20px auto;
                    height:100px;
                    width: 100px;
                    border-radius: 50%;
                    background: var(--mainColor);
                    display: grid;
                    justify-items:center;
                    align-items:center;

                }

                .formulario div img {
                    height: 50px;
                    margin: 40px 0;
                }

                .formulario div .color {
                    background:#efe5dd;
                    color: var(--mainColor);
                    border-radius: 0 0 15px 15px;
                    padding: 15px 20px;
                }

                .formulario input {
                    background: white;
                    margin-top: 15px;
                    width: 170px;
                    padding: 16px 5px;
                    border-radius: 10px 0 0 10px;
                    border: none;
                    outline: none;
                    box-shadow: 15px 5px 10px -5px #000000;
                }

                .formulario input::placeholder {
                    color: #967961;
                }


                .formulario form {
                    grid-column: 1/3;
                }

                .formulario .enviar {
                    background: white;
                    height: 47px;
                    width: 60px;
                    border-radius: 0 10px 10px 0;
                    border: none;
                    box-shadow: 5px 5px 10px -5px #000000;
                    outline: none;
                    cursor: pointer;
                }

                .formulario .enviar:hover {
                    background: #eee;
                }
                
            `}</style>
        </div>
    )
}

export default Whatsapp
