import Axios from "axios";
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

import AddCategory from "./AddCategory";
import SubCategories from "./SubCategories";
import Tags from "../tag/Tags";


import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";

const EditCategory = ({updateCategoryList, updateCategoryName}) => {

    const {
        categoryList,
        categoryName
    } = useSelector(state => state.menu)

    const [newCategoryName, setNewCategoryName] = useState('')

    useEffect(() => {
        setNewCategoryName(categoryName)
    }, [categoryName])

    const onSubmit = async (e) => {
        e.preventDefault()

        const url = '/api/category'
        await Axios.put(url, {
            newCategory: newCategoryName,
            category: categoryName
        })
        updateCategoryList(categoryList.map(item => item.category === categoryName ? {category: newCategoryName} : item))
        updateCategoryName(newCategoryName)
    }

    const onChange = (e) => {
        setNewCategoryName(e.target.value)
    }

    const deleteCategory = async () => {

        const alertRes = await Swal.fire({
            title: 'Eliminar Categoría',
            text: "Será eliminada esta categoría de forma permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Carcelar',
            cancelButtonColor: '#aa3333',
        })

        if (alertRes.isConfirmed) {
            const url = `/api/category?categoryName=${categoryName}`
            const response = await Axios.delete(url)
            if (response.data.error) {
                Swal.fire(
                    'Error!',
                    response.data.message,
                    'warning'
                )
                return null
            }
            updateCategoryList(categoryList.filter(cat => cat.category !== categoryName))
            updateCategoryName('')
            Swal.fire(
                'Eliminada!',
                'La categoría ha sido eliminada.',
                'success'
            )
        }

    }

    return <div className="container">

        {
            categoryName 
            ?
                <div className="item">
                    <h3>Categoría seleccionada:</h3>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} type="text" value={newCategoryName}/>
                        <button className="update" type="submit">Actualizar nombre</button>
                    </form>
            
                    <button type="button" className="delete" onClick={deleteCategory}>Eliminar categoría</button>
                </div>
            :
                null

        }
        {/* <AddCategory/> */}
        <br/>
        <SubCategories/>
        <br/>
        <Tags />

        <style jsx>{`

            h3 {
                grid-column: 1/3;
                color: white;
                padding: 5px 0;
            }

            .item {
                display: grid;
                grid-template-columns: 2fr 1fr;
                padding-top: 20px;
            }

            form {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            button, input {
                padding: 10px 5px;
                font-weight: bolder;
            }

            .update {
                background-color: #aaaaaabb;
                transition: background-color .5s;
            }

            .update:hover {
                background-color: #aaaaaa;
            }

            .delete {
                background-color: #aa3333bb;
                color: white;
                transition: background-color .5s;
            }

            .delete:hover {
                background-color: #aa3333;
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCategory)