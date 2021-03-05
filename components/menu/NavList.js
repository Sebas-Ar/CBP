import React from 'react'
import { useSelector, connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/mapToProps/menuMapToProps"

const NavList = ({text, updateSubcategoryName}) => {

    //Cambia el Submenú
    const change = () => {
        updateSubcategoryName(text)
    }

    const {subcategoryName} = useSelector(state => state.menu)

    return (
        <li onClick={change}>

            {text}

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
                    border-bottom: ${subcategoryName == text ? "4px solid white" : ""};
                    margin: ${subcategoryName == text ? "8px 0" : ""}
                }
            `}</style>
        </li>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavList)


