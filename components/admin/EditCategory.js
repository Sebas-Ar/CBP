import Axios from "axios";
import { useEffect, useState } from "react"
import AddCategory from "./AddCategory";
import SubCategories from "./SubCategories";
import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

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
        const url = `/api/category?categoryName=${categoryName}`
        const result = await Axios.delete(url)
        console.log(result.data)
        updateCategoryList(categoryList.filter(cat => cat.category !== categoryName))
        updateCategoryName('')

    }

    return <div className="container">

        <div className="item">
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" value={newCategoryName}/>
                <button className="update" type="submit">Actualizar Nombre</button>
            </form>
    
            <button type="button" onClick={deleteCategory}>Eliminar Categoria</button>
        </div>
        <AddCategory/>
        <SubCategories/>

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