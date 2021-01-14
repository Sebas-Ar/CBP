import Axios from "axios";
import { useState } from "react";
import { useSelector, connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const SubCategories = ({subCategories, _id}) => {

    const {categoryName, subcategoryName} = useSelector(state => state.menu)

    const [data, setData] = useState({
        onSubCategory: true,
        _id,
    })

    const onChange = e => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onSubmitAdd = async e => {
        e.preventDefault();
        
        const url = '/api/category'
        try {
            const result = await Axios.post(url, data)
            console.log(result.data)
            
        } catch (error) {
            console.log(error)   
        }
    }

    const onSubmitUpdate = e => {
        e.preventDefault()
    }

    const deleteSubcategory = async (_id, name) => {
        console.log(_id, name)
        const url = `/api/category?_id=${_id}&name=${name}`
        await Axios.delete(url)
    }

    return <ul className="container">

        <h3>Subcategoría</h3>

        <li>
            <form onSubmit={onSubmitUpdate}>
                <input type="text" name="" placeholder={subcategoryName}/>
                <button type="submit">Actualizar nombre</button>
            </form>
            <button type="button" onClick={() => deleteSubcategory(subcategoryName, categoryName)}>Eliminar Subcategoria</button>
        </li>

        <li>
            <form onSubmit={onSubmitAdd}>
                <h3 className="title-add-sub">Agregar Subcategoria</h3>
                <input type="text" name="subCategory" onChange={onChange}/>
                <button type="submit">Agregar Subcategoria</button>
            </form>
        </li>

        <style jsx>{`

            li {
                margin-top: 10px;
                list-style: none;
                display: grid;
                grid-template-columns: 2fr 1fr;
            }

            form {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            ul > h3 {
                color: white;
                margin-top: 7px;
            }

            form > h3 {
                color: white;
                margin-bottom: 10px;
            }

            .title-add-sub {
                grid-column: 1/4;
            }

            button, input {
                padding: 5px;
            } 

        `}</style>
    </ul>
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories)