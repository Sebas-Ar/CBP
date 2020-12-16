import React, { useState, useEffect } from 'react'
import Nav from '../nav/nav'
import NavMovil from '../nav/navMovil'
import BotonesSocial from '../social/BotonesSocial'
import Whatsapp from '../social/Whatsapp';


const Layout = (props) => {

    const [whats, setWhats] = useState(false);
    const [width, setwidth] = useState(0);
    const changeWhats = () => {
        setWhats(!whats)
    }

    const change = (state) => {
        setWhats(state)
    }

    useEffect(() => {
        setwidth(screen.width);
        console.log(screen.width)
    }, []);

    return (
        <React.Fragment>

            <Nav />
            <NavMovil />
            <BotonesSocial changeWhats={changeWhats} />
            <Whatsapp whats={whats} change={change} />
            { props.children }

        </React.Fragment>
    )
    
}

export default Layout
