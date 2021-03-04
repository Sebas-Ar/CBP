import Axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"

import { useSelector, connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";

const SubCategories = ({updateSubcategoryList, updateSubcategoryName}) => {

    const {
        categoryName, 
        subcategoryName, 
        subCategoryList
    } = useSelector(state => state.menu)

    const [data, setData] = useState({
        onSubCategory: true
    })
    const [newSubcategory, setNewSubcategory] = useState('')

    useEffect(() => {
        setNewSubcategory(subcategoryName)
    }, [subcategoryName])

    const onChange = e => {
        setData(Object.assign({}, data, {[e.target.name]: e.target.value}))
    }

    const onChangeUpdate = e => {
        setNewSubcategory(e.target.value)
    }
    
    const onSubmitUpdate = async e => {
        e.preventDefault()

        const url = '/api/category'
        await Axios.put(url, {
            category: categoryName,
            subcategory: subcategoryName,
            newSubcategory
        })
        updateSubcategoryList(subCategoryList.map(item => item === subcategoryName ? newSubcategory : item))
        updateSubcategoryName(newSubcategory)


    }

    const onSubmitAdd = async e => {
        e.preventDefault();

        if (data.subCategory) {
            const url = '/api/category'
            try {
                const response = await Axios.post(url, {...data, categoryName})
                if (response.data.error) {
                    Swal.fire(
                        'Error!',
                        response.data.message,
                        'warning'
                    )
                    return null
                }
                updateSubcategoryList(response.data.data)
                updateSubcategoryName(data.subCategory)
                setData({...data, subCategory: ''})
                
            } catch (error) {
                console.log(error)   
            }
        } else {
            Swal.fire(
                'Error!',
                'No puede dejar el campo vacio',
                'warning'
            )
        }
        
    }

    const deleteSubcategory = async () => {
        const alertRes = await Swal.fire({
            title: 'Eliminar Subcategoría',
            text: "Será eliminada esta subcategoría de forma permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Carcelar',
            cancelButtonColor: '#aa3333',
        })

        if (alertRes.isConfirmed) {
            const url = `/api/category?isSubcategory=true&categoryName=${categoryName}&subcategoryName=${subcategoryName}`
            const response = await Axios.delete(url)
            if (response.data.error) {
                    Swal.fire(
                        'Error!',
                        response.data.message,
                        'warning'
                    )
                    return null
                }
            console.log(response.data)
            updateSubcategoryList(response.data.data)
            updateSubcategoryName('')
            Swal.fire(
                'Eliminado!',
                'La subcategoría ha sido eliminada.',
                'success'
            )
        }
    }

    return <ul className="container">
        {
            subcategoryName
            ?
                <>
                    <h3>Subcategoría seleccionada:</h3>

                    <li>
                        <form onSubmit={onSubmitUpdate}>
                            <input type="text" onChange={onChangeUpdate} value={newSubcategory}/>
                            <button type="submit" className="update" >Actualizar nombre</button>
                        </form>
                        <button type="button" className="delete" onClick={deleteSubcategory}>Eliminar subcategoría</button>
                    </li>
                </>
            :
                null
        }

        {
            categoryName
            ?
                <li>
                    <form onSubmit={onSubmitAdd}>
                        <h3 className="title-add-sub">Agregar subcategoría:</h3>
                        <input type="text" name="subCategory" onChange={onChange} value={data.subCategory ? data.subCategory : ''}/>
                        <button type="submit" className="add">Agregar subcategoría</button>
                    </form>
                </li>
            :
                null
        }

        <style jsx>{`

            li {
                list-style: none;
                display: grid;
                grid-template-columns: 2fr 1fr;
            }

            form {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            h3 {
                padding: 5px 0;
                color: white;
            }

            .title-add-sub {
                grid-column: 1/4;
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

            .add {
                background-color: #aaaaaabb;
                transition: background-color .5s;
            }

            .add:hover {
                background-color: #aaaaaa;
            }

        `}</style>
    </ul>
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories)