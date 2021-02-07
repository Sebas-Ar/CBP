import Axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const SubCategories = ({updateSubcategoryList, updateSubcategoryName}) => {

    const {categoryName, subcategoryName, subCategoryList} = useSelector(state => state.menu)

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
        
        const url = '/api/category'
        try {
            const result = await Axios.post(url, {...data, categoryName})
            updateSubcategoryList(result.data.data)
            updateSubcategoryName(data.subCategory)
            setData({...data, subCategory: ''})
            
        } catch (error) {
            console.log(error)   
        }
    }

    const deleteSubcategory = async () => {
        const url = `/api/category?isSubcategory=true&categoryName=${categoryName}&subcategoryName=${subcategoryName}`
        let response
        try {
            response = await Axios.delete(url)
            console.log(response.data)
            updateSubcategoryList(response.data.data)
            updateSubcategoryName('')
        } catch ({other}) {
            console.log(other)
        }
        
    }

    return <ul className="container">

        <h3>Subcategoría</h3>

        <li>
            <form onSubmit={onSubmitUpdate}>
                <input type="text" onChange={onChangeUpdate} value={newSubcategory}/>
                <button type="submit">Actualizar nombre</button>
            </form>
            <button type="button" onClick={deleteSubcategory}>Eliminar Subcategoria</button>
        </li>

        <li>
            <form onSubmit={onSubmitAdd}>
                <h3 className="title-add-sub">Agregar Subcategoria</h3>
                <input type="text" name="subCategory" onChange={onChange} value={data.subCategory ? data.subCategory : ''}/>
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