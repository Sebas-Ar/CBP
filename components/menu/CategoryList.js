import React from "react"
import { useSelector, connect } from "react-redux"
import {
    mapDispatchToProps,
    mapStateToProps,
} from "../../redux/mapToProps/menuMapToProps"

const CategoryList = ({ category, updateCategoryName }) => {
    //cambia el menu Principal
    const change = () => {
        updateCategoryName(category)
    }

    const { categoryName } = useSelector((state) => state.menu)

    return (
        <button onClick={change}>
            {category}
            <span className="flecha">&#9660;</span>

            <style jsx>{`
                button {
                    background: #a99767;
                    border: 1px solid #a99767;
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
                    background: #f1d58c;
                    border: 1px solid #f1d58c;
                    color: white;
                }
            `}</style>

            <style jsx>{`
                button {
                    background: ${categoryName === category ? "#F1D58C" : ""};
                    border: ${categoryName === category
                        ? "1px solid #F1D58C"
                        : ""};
                    color: ${categoryName === category ? "white" : ""};
                }
            `}</style>
        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
