import React from 'react'

const NavButton = (props) => {

    //cambia el menu Principal
    const change = () => {
        props.changeBut(parseInt(props.change))
    }

    return (
        <button onClick={change}>
            {props.text}
            <span className="flecha">&#9660;</span>

            <style jsx>{`
                button {
                    background: #A99767;
                    border: 1px solid #A99767;
                    color: rgb(206, 197, 173);
                    padding: 10px 5px;
                    outline: none;
                    cursor: pointer;
                }

                button .flecha {
                    font-size: 8px;
                    margin-left: 5px;
                } 

                button:hover {
                    background: #F1D58C;
                    border: 1px solid #F1D58C;
                    color: white;
                }
            `}</style>

            <style jsx>{`
                button {
                    background: ${props.menu === parseInt(props.change) ? "#F1D58C" : ""};
                    border: ${props.menu === parseInt(props.change) ? "1px solid #F1D58C" : ""};
                    color: ${props.menu === parseInt(props.change) ? "white" : ""}
                }
            `}</style>

        </button>
    )
}

export default NavButton
