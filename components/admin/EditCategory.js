import Axios from "axios";
import { useEffect, useState } from "react"
import SubCategories from "./SubCategories";
import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const EditCategory = ({}) => {

    const {
        categoryList,
        subCategoryList,
        categoryName
    } = useSelector(state => state.menu)

    useEffect(() => {

    }, [categoryList]);

    const onSubmit = async (e) => {
    }

    const onChange = (e) => {
    }

    const deleteCategory = async () => {
    }

    return <div className="container">

        <div className="item">
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder={categoryName}/>
                <button className="update" type="submit">Actualizar Nombre</button>
            </form>
    
            <button type="button" onClick={deleteCategory}>Eliminar Categoria</button>
        </div>

        <SubCategories subCategories={subCategoryList}/>

        <style jsx>{`

            .container {
                height: 340px;
                overflow: auto;
                padding-right: 10px;
            }

            .item {
                display: grid;
                grid-template-columns: 2fr 1fr;
                margin-top: 20px;
                padding-top: 20px;
            }

            h2 {
                text-align: center;
                color: white;
            }

            form {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            button, input {
                padding: 5px;
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCategory)