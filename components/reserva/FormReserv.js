import React, { useState, useEffect } from 'react'

const FormReserv = () => {

    //Datos del formulario
    const [form, setform] = useState({
        area: 'Salón',
        name: '',
        celular: 0,
        email: '',
        people: 0,
        time: ''
    });

    //Nombre completo del usuario
    const [name, setName] = useState({name: '', lastname: ''});

    //Genera el nombre completo del usuario
    useEffect(() => {
        setform(
            Object.assign({}, form, { name: name.name + ' ' + name.lastname })
        )
    }, [name]);

    //Detecta el cambio en los Inputs para obtener el valor tecleado de los datos
    const onChangeForm = e => {
        setform(
            Object.assign({}, form, { [e.target.name]: e.target.value })
        )
    }

    //Detecta el cambio en los Inputs para obtener el valor tecleado del nombre y apellidpo del usuario
    const onChangeName = e => {
        setName(
            Object.assign({}, name, { [e.target.name]: e.target.value })
        )
    }

    //Envia el formulario
    const onSubmit = async e => {
        e.preventDefault()

        const url = '/api/send-mail'

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })

            const { info } = await response.json()
            console.log(info);

        } catch (error) {
            
        }
    }

    return (
    
    <form onSubmit={onSubmit}>
        <h1>ESTAMOS EMOCIONADOS POR ATENDERTE</h1>
        <p>Nuestro equipo está preparado para brindarte la mejor experiencia gastronómica, visual y auditiva que puedas recibir en Casco Antiguo.</p>
        <select name="area" onChange={onChangeForm}>
            <option value="Salón">Salón</option>
            <option value="Terraza baja">Terraza baja</option>
        </select>
        <input onChange={onChangeName} type="text" name="name" placeholder="Nombre(s)"/>
        <input onChange={onChangeName} type="text" name="lastname" placeholder="Apellido(s)"/>
        <input onChange={onChangeForm} type="number" name="celular" placeholder="Celular"/>
        <input onChange={onChangeForm} type="email" name="email" placeholder="Email"/>
        <input onChange={onChangeForm} type="number" name="people" placeholder="Cantidad de personas"/>
        <input onChange={onChangeForm} className="time" name="time" type="time"/>
        <br/>
        <p className="gris">* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse debitis sed veritatis commodi distinctio molestiae eligendi iusto, dicta earum adipisci?</p>
        <br/>
        <p className="gris">* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur labore fugiat excepturi ipsam eaque nobis omnis iusto quisquam maiores aut?</p>
        <button type="submit">Enviar</button>
        
        <style jsx>{`

            .gris {
                color: #666666;
                font-size: 12px;
            }

            form {
                display: grid;
                margin: 120px calc(1vmin + 6vw) 100px calc(1vmin + 6vw);
                
            }

            h1 {
               color: #A99767
            }

            .time {
                text-align: center;
                font-size: 16px;
                font-family:  none;
            }

            .time:before {
                content: 'Hora';
                color: #777;
            }

            input, select {
                border: none;
                border-bottom: 1px solid #333333aa;
                outline: none;
                margin: 15px 0;
            }


            button {
                border:none;
                background: #A99767;
                width: 150px;
                color: white;
                border-radius: 20px; 
                margin: 20px;
                padding: 10px;
                justify-self: center;
                outline: none;
                cursor: pointer;
            }

            button:hover {
                background: rgb(204, 171, 88);
            }

            @media screen and (max-width: 700px) {
                form {
                    grid-column: 1/3;
                }
            }
        `}</style>
    </form>
    
    )
}

export default FormReserv