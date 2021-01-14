import Axios from "axios"
import { useState } from "react"

const AddCategory = () => {

    const [category, setCategory] = useState('')

    const onSubmit = async e => {
        e.preventDefault()
        
        const url = '/api/category'
        const result = await Axios.post(url, {category})
        console.log(result.data)

    }

    return <form onSubmit={onSubmit} className="container">

        <h2>Agregar Categoria</h2>
        <input type="text" onChange={e => setCategory(e.target.value)}/>
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

export default AddCategory