import PropTypes from 'prop-types'
import React from 'react'
import { useSelector, connect } from 'react-redux'
import {
    mapDispatchToProps,
    mapStateToProps,
} from '../../redux/mapToProps/menuMapToProps'

const SubcategoryList = ({ subcategory, updateSubcategoryName }) => {
    // Cambia el Submenú
    const change = () => {
        updateSubcategoryName(subcategory)
    }

    const { subcategoryName } = useSelector((state) => state.menu)

    return (
        <li onClick={change} onKeyDown={change} role="presentation">
            {subcategory}

            <style jsx>{`
                li {
                    list-style: none;
                    text-align: center;
                    color: white;
                    margin: 10px 0;
                    font-size: 12px;
                    transition: margin 0.2s, border-bottom 0.2s;
                    cursor: pointer;
                }

                li:hover {
                    border-bottom: 4px solid white;
                    margin: 8px 0;
                }
            `}</style>

            <style jsx>{`
                li {
                    border-bottom: ${subcategoryName === subcategory
                        ? '4px solid white'
                        : ''};
                    margin: ${subcategoryName === subcategory ? '8px 0' : ''};
                }
            `}</style>
        </li>
    )
}

SubcategoryList.propTypes = {
    subcategory: PropTypes.func.isRequired,
    updateSubcategoryName: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryList)
