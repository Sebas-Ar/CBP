import React from 'react'

const NavList = (props) => {

    //Cambia el Submenú
    const change = () => {
        props.changeLi(parseInt(props.change))
    }

    return (
        <li onClick={change}>

            {props.text}

            <style jsx>{`
                li {
                    list-style: none;
                    text-align: center;
                    color: white;
                    margin: 10px 0;
                    font-size: 12px;
                    transition: margin .2s, border-bottom .2s;
                    cursor: pointer;
                }    

                li:hover {
                    border-bottom: 4px solid white;
                    margin: 8px 0;
                }
                
            `}</style>

            <style jsx>{`
                li {
                    border-bottom: ${props.sub == parseInt(props.change) ? "4px solid white" : ""};
                    margin: ${props.sub == parseInt(props.change) ? "8px 0" : ""}
                }
            `}</style>
        </li>
    )
}

export default NavList


