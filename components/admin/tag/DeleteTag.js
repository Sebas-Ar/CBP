import axios from "axios";
import Swal from "sweetalert2"

import { mapDispatchToProps, mapStateToProps } from '../../../redux/mapToProps/menuMapToProps'
import { connect, useSelector } from "react-redux";

const DeleteTag = ({tag, updateTagList, updateItems}) => {

    const {tagList, itemsList} = useSelector(state => state.menu)

    const deleteTag = async e => {
        e.preventDefault();
        const alertRes = await Swal.fire({
            title: 'Eliminar Etiqueta',
            text: "Será eliminada esta estiqueta en cada item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Carcelar',
            cancelButtonColor: '#aa3333',
        })

        if (alertRes.isConfirmed) {

            const url = `/api/tag?tag=${tag}`
            const response = await axios.delete(url)
            
            const newTagList = tagList.filter(t => t != tag)
            updateTagList(newTagList)
            console.log(response.data)
            updateItems(itemsList.map(item => (
                {
                    ...item,
                    tagList: item.tagList.filter( t => t != tag)
                }
            )))
            Swal.fire(
                'Eliminado!',
                'El tag ha sido eliminado.',
                'success'
            )
        }

    }

    return <form className="container">

        <button onClick={deleteTag}>
            <svg role="img" viewBox="0 0 448 512">
                <path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/>
            </svg>    
        </button>

        <style jsx>{`

            .container {
                display: inline;
            }

            button {
                background-color: #aa3333bb;
                height: 100%;
                font-weight: bolder
            }

            svg {
                padding: 0 5px;
                width: 15px;
                color: white;
            }

        `}</style>
    </form>
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTag)