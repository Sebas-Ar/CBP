import Axios from "axios"
import { useState } from "react"
import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const AddCategory = ({updateCategoryList, updateCategoryName}) => {

    const [category, setCategory] = useState('')
    const {categoryList} = useSelector(state => state.menu)

    const onSubmit = async e => {
        e.preventDefault()
        
        const url = '/api/category'
        try {
            const result = await Axios.post(url, {category})
            console.log(result)
            updateCategoryList([...categoryList, {category}])
            updateCategoryName(category)
            setCategory('')
        } catch (error) {
            console.log(error)
        }

    }

    return <form onSubmit={onSubmit} className="container">

        <h2>Agregar Categoria</h2>
        <input type="text" onChange={e => setCategory(e.target.value)} value={category}/>
        <button>Agregar Categoria</button>

        <style jsx>{`

            .container {

                margin-bottom: 25px;
                
            }

            h2 {
                color: white;
                margin-bottom: 5px;
            }

            input, button {
                padding: 5px;
            }

        `}</style>
    </form>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)