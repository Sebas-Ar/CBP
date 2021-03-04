import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";

const AddTagToItem = ({setDataForm, dataForm}) => {

    const {tagList} = useSelector(state => state.menu)

    const addTag = e => {
        if (e.target.value) {
            const tagExist = dataForm.tagList.every(tag => tag !== e.target.value)

            if (tagExist) {
                setDataForm(Object.assign({}, dataForm, {
                    tagList: [...dataForm.tagList, e.target.value]
                }))
            }
        }
    }

    const removeTag = (tag = '') => {
        const newTagList = dataForm.tagList.filter(tagInList => tagInList !== tag)
        setDataForm(Object.assign({}, dataForm, {
            tagList: newTagList
        }))
    }

    return <div className="container">

        <label className="tagList">
            Etiquetas:
            <select onChange={addTag}>
                <option value="">-</option>
                {
                    tagList.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))
                }
            </select>
        </label>
        {
            dataForm.tagList.map((tag, index) => (
                <div key={index} className="tag">
                    <p>{tag}</p>
                    <button type="button" onClick={() => removeTag(tag)}>
                        <svg role="img" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/>
                        </svg>
                    </button>
                </div>
            ))
        }

        <style jsx>{`

            .container {
                
            }

            .tagList {
                display: block;
                color: white;
                font-weight: bolder;
                margin-top: 15px;
                margin-bottom: 5px;
            }

            select {
                outline: none;
                padding: 5px 10px;
                border-radius: 20px;
                margin-left: 10px;
            }

            .tag {
                display: inline-grid;
                grid-template-columns: auto auto;
                margin: 8px 16px 8px 0;
            }

            p {
                background-color: #aaaaaabb;
                padding: 10px 5px;
                font-weight: bolder;
            }
            
            button {
                background-color: #aa3333bb;
                height: 100%;
                font-weight: bolder
                transition: background-color .5s;
            }

            button:hover {
                background-color: #aa3333;
            }

            svg {
                padding: 0 5px;
                width: 15px;
                color: white;
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTagToItem)