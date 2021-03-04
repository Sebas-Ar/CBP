import axios from "axios";
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

import { mapDispatchToProps, mapStateToProps } from '../../../redux/mapToProps/menuMapToProps'
import { connect, useSelector } from "react-redux";


const UpdateTag = ({tag, updateTagList, updateItems}) => {

    const {tagList, itemsList} = useSelector(state => state.menu)

    const [newTag, setnewTag] = useState(tag)

    useEffect(() => {
        setnewTag(tag)
    }, [tag]);

    const updateTag = async e => {
        e.preventDefault()
        
        const alertRes = await Swal.fire({
            title: 'Actualizar item',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Actualizar',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Carcelar',
            cancelButtonColor: '#aa3333',
        })

        if (alertRes.isConfirmed) {

            const url = '/api/tag'
            const response = await axios.put(url, {newTag, tag})
            console.log(response.data)
            const newTagList = tagList.map(t => t === tag ? newTag : t)
            updateTagList(newTagList)
            updateItems(itemsList.map(item => (
                {
                    ...item,
                    tagList: item.tagList.map( t => t === tag ? newTag : t)
                }
            )))
            Swal.fire(
                'Actualizado!',
                'El item ha sido Actualizado.',
                'success'
            )
        }

    }

    return <form className="container" onSubmit={updateTag}>

        <input type="text" value={newTag} onChange={e => setnewTag(e.target.value)}/>

        <button>
            <svg viewBox="0 0 512 512">
                <path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>
            </svg>
        </button>

        <style jsx>{`

            .container {
                display: grid;
                grid-template-columns: auto auto;
            }

            input {
                padding: 10px 5px;
                font-weight: bolder;
            }

            button {
                
                background-color: #aaaaaabb;
                height: 100%;
            }
            
            svg {
                padding: 0 5px;
                width: 15px;
                color: white;
            }

        `}</style>
    </form>
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTag)