import React, { useState } from 'react'

const Formulario = () => {

    const [message, setmessage] = useState({
        name: '',
        cel: 0,
        mail: '', 
        msg: ''
    })

    const onChange = e => {
        setmessage(
            Object.assign({}, message,{ [e.target.name]: e.target.value })
        )
    }

    const onSubmit = async e => {
        e.preventDefault()
        
        const url = '/api/contact'
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            })
            const { info } = await response.json()

            console.log(info);
        } catch (error) {
            
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>PERMÍTENOS RESOLVER TUS DUDAS</h2>
            <p>Nuestro equipo está pendiente de tus necesidades, consúltanos y te responderemos a la mayor brevedad posible.</p>
            <input onChange={onChange} className="uno" type="text" name="name" placeholder="Nombre"/>
            <input onChange={onChange} className="dos" type="text" name="cel" placeholder="celular"/>
            <input onChange={onChange} className="tres" type="text" name="mail" placeholder="Correo"/>
            <input onChange={onChange} className="cuatro" type="text" name="msg" placeholder="Mensaje"/>
            <button type="submit">Enviar</button>
            <div className="">
                <img src="/img/XMLID_298_.png" alt="icono de telefono"/>
                <img src="/img/mapas-y-banderas.png" alt="icono de mapa" />
                <img src="/img/sobre.png" alt="icono de Email" />
                <h4>Teléfono</h4>
                <h4>Dirección</h4>
                <h4>Correo</h4>
            </div>

            <style jsx>{`

                :global(:root) {
                    --sizeForm: 1;
                }

                form {
                    margin: 0 10px;
                    display: grid;
                    grid-template-columns: .5fr 4fr 4fr .5fr;
                    grid-template-rows: 1fr 2fr 1fr 1fr 1fr 3fr 2fr;
                }

                h2 {
                    font-size: 23px;
                    grid-column: 2/4;
                    color: #A99767;
                }

                p {
                    grid-column: 2/4;
                    text-align: justify;
                }

                input {
                    border: none;
                    border-bottom: 1px solid black;
                    background: none;
                    outline: none;
                }

                .uno {
                    grid-row: 3/4;
                    grid-column: 2/3;
                    margin-right:20px;
                }

                .dos {
                    grid-row: 3/4;
                    grid-column: 3/4;
                    margin-left:20px;
                }

                .tres {
                    grid-row: 4/5;
                    grid-column: 2/4;
                }

                .cuatro {
                    grid-row: 5/6;
                    grid-column: 2/4;
                }

                button {
                    grid-row: 6/7;
                    grid-column: 2/4;
                    background: #A99767;
                    width: 200px;
                    height: 35px;
                    margin: 40px;
                    padding: 10px;
                    border: none;
                    border-radius: 20px;
                    justify-self: center;
                    color: white;
                    outline: none;
                    cursor: pointer;
                }

                button:hover {
                    background: rgb(204, 171, 88);
                }

                img {
                    height: 30px;
                }

                h4 {
                    color: #66666666;
                    font-weight: 100;
                }

                div {
                    margin: 0 40px;
                    grid-row: 7/8;
                    grid-column: 2/4;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 2fr 1fr;
                    justify-items: center;
                }

                @media screen and (max-width: 450px) {
                    form {
                        grid-column: 1/3;
                    }

                    input {
                        width: 85%;
                    }

                    .tres, .cuatro {
                        width: 100%;
                    }

                    p {
                        margin: 10px 0;
                    }
                }
            `}</style>
        </form>
    )
}

export default Formulario