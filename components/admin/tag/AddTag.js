import axios from "axios"
import { useState } from "react"
import { mapDispatchToProps, mapStateToProps } from '../../../redux/mapToProps/menuMapToProps'
import { connect, useSelector } from "react-redux";


const AddTag = ({updateTagList}) => {

    const {tagList} = useSelector(state => state.menu)
    const [tag, setTag] = useState('')

    const uploadTag = async e => {
        e.preventDefault()

        const url = '/api/tag'

        const response = await axios.post(url, {tag})

        console.log(response)
        updateTagList([...tagList, tag])
    }

    return <div className="container">

        <h3>Agregar etiquetas:</h3>
        <form className="add" onSubmit={uploadTag}>
            <input type="text" onChange={e => setTag(e.target.value)}/>
            <button>Agregar Etiqueta</button>
        </form>

        <style jsx>{`

            h3 {
                color: white;
                padding: 5px 0;
            }

            .add {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }

            .add > input, .add > button {
                padding: 10px 5px;
                font-weight: bolder;
            }

            .add > button {
                background-color: #aaaaaabb;
                transition: background-color .5s;
            }

            .add > button:hover {
                background-color: #aaaaaa;
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTag)