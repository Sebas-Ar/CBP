import React from 'react'
import { useSelector, connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/mapToProps/menuMapToProps"

const NavList = (props) => {

    //Cambia el Submenú
    const change = () => {
        props.changeLi(parseInt(props.change))
        props.updateSubcategoryName(props.text)
    }

    const {subcategoryName} = useSelector(state => state.menu)

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
                    border-bottom: ${subcategoryName == props.text ? "4px solid white" : ""};
                    margin: ${subcategoryName == props.text ? "8px 0" : ""}
                }
            `}</style>
        </li>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavList)


