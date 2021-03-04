import Axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";

const AddCategory = ({updateCategoryList, updateCategoryName}) => {

    const [category, setCategory] = useState('')
    const {categoryList} = useSelector(state => state.menu)

    const onSubmit = async e => {
        e.preventDefault()

        if (category) {
            const url = '/api/category'
            try {
                const response = await Axios.post(url, {category})
                console.log(response.data)
                if (response.data.error) {
                    Swal.fire(
                        'Error!',
                        response.data.message,
                        'warning'
                    )
                    return null
                }
                updateCategoryList([...categoryList, {category}])
                updateCategoryName(category)
                setCategory('')
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

    return <form onSubmit={onSubmit} className="container">

        <h3>Agregar categoria:</h3>
        <input type="text" onChange={e => setCategory(e.target.value)} value={category}/>
        <button className="add">Agregar categoria</button>

        <style jsx>{`

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }

            h3 {
                grid-column: 1/4;
                color: white;
                padding: 5px 0;
            }

            input, button {
                padding: 10px 5px;
                font-weight: bolder;

            }

            .add {
                background-color: #aaaaaabb;
                transition: background-color .5s;
            }

            .add:hover {
                background-color: #aaaaaa;
            }

        `}</style>
    </form>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)