import React from 'react'
import { useSelector, connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/mapToProps/menuMapToProps"

const NavButton = ({text, updateCategoryName}) => {

    //cambia el menu Principal
    const change = () => {
        updateCategoryName(text)
    }

    const {categoryName} = useSelector(state => state.menu)

    return (
        <button onClick={change}>
            {text}
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
                    background: ${categoryName === text ? "#F1D58C" : ""};
                    border: ${categoryName === text ? "1px solid #F1D58C" : ""};
                    color: ${categoryName === text ? "white" : ""}
                }
            `}</style>

        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton)
