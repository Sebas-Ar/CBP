import axios from "axios"
import { useEffect, useState } from "react"
import DeleteTag from "./DeleteTag";
import UpdateTag from "./UpdateTag";
import { mapDispatchToProps, mapStateToProps } from '../../../redux/mapToProps/menuMapToProps'
import { connect, useSelector } from "react-redux";


const TagList = ({updateTagList}) => {

    const {tagList} = useSelector(state => state.menu)

    useEffect(() => {
        getTagList()
    }, [])

    const getTagList = async () => {
        const url = '/api/tag'
        const response = await axios.get(url)
        updateTagList(response.data.tagList)
    }

    return <div className="container">

        <h3>Lista de etiquetas:</h3>
        <ul>
            {
                tagList.map((tag, index) => (
                    <li key={index}>
                        <UpdateTag tag={tag}/>
                        <DeleteTag tag={tag}/>
                    </li>
                ))
            }
        </ul>

        <style jsx>{`

            h3 {
                color: white;
                padding: 5px 0;
            }

            ul {
                list-style: none;
                overflow-y: auto;
                height: 135px;
            }

            ul::-webkit-scrollbar {
                width: 7px;
            }

            ul::-webkit-scrollbar-thumb {
                background-color: #3b3b3bcc;
                border-radius: 5px;
            }

            ul::-webkit-scrollbar-track {
                background-color: #aaaaaabb;
                border-radius: 5px;
            }

            li {
                display: inline-grid;
                grid-template-columns: auto auto;
                margin: 8px 16px 8px 0;
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList)