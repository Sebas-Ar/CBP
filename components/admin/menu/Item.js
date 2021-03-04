import axios from "axios"
import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";
import {isImg} from "../../../utils/isImg"
import Swal from "sweetalert2"
import Loading from "../../loading/Loading";
import AddTagToItem from "./AddTagToItem";

const Item = ({item, num, updateItems}) => {

    const {itemsList} = useSelector(state => state.menu)

    const [selectedFile, setSelectedFile] = useState(undefined)
    const [changedImage, setChangedImage] = useState(false);
    const [dataForm, setDataForm] = useState({
        _id: item._id,
        title: item.title,
        description: item.description,
        tagList: item.tagList ? item.tagList : []
    })
    const [imgUrlCloud, setImgUrlCloud] = useState(item.img.url)
    const [load, setLoad] = useState({
        delete: false,
        update: false
    })

    useEffect(() => {
        setImgUrlCloud(item.img.url)
    }, [item.img.url]);

    useEffect(() => {
        setDataForm(Object.assign({}, dataForm, {tagList: item.tagList ? item.tagList : []}))
    }, [item.tagList]);

    const deleteMenuItem = async () => {

        const alertRes = await Swal.fire({
            title: 'Eliminar item',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Carcelar',
            cancelButtonColor: '#aa3333',
        })

        if (alertRes.isConfirmed) {
            setLoad({...load, delete: true})
            try {
                const url = `/api/menu?_id=${item._id}`
                const result = await axios.delete(url)
                console.log(result.data)
                let newItemsList = [...itemsList]
                newItemsList.splice(num, 1)
                updateItems(newItemsList)
            } catch (error) {
                console.log(error)
            }
            setLoad({...load, delete: false})
            Swal.fire(
                'Eliminado!',
                'El tag ha sido eliminado.',
                'success'
            )
        }

    }

    const onChangeHandler = e => {
        
        const img = document.getElementById(`${item._id}`)
        
        if (isImg(e.target.files[0]?.name)) {
            
            setSelectedFile(e.target.files[0])
            const objetURL = URL.createObjectURL(e.target.files[0])
            console.log(objetURL)
            img.src = objetURL
            setChangedImage(true)
            
        } else {
            console.log('el archivo debe ser imagen')
            img.src = imgUrlCloud
            setChangedImage(false)
            setSelectedFile(undefined)
        }
    }

    const emptyForm = () => {
        
        const img = document.getElementById(`${item._id}`)
        const file = document.getElementById(`file${item._id}`)
        img.src = imgUrlCloud
        file.value = ''
        setChangedImage(false)
        setSelectedFile(undefined)
        
    }

    const onChangeForm = e => {
        setDataForm(Object.assign({}, dataForm, {[e.target.name]: e.target.value}))
    }

    const onSubmitForm = async e => {
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
            setLoad({...load, update: true})
            const data = new FormData()
            data.append('dataForm', JSON.stringify(dataForm))
            if (selectedFile) data.append('img', selectedFile)
            
            const url = '/api/menu'
            
            try {
                
                const response = await axios.put(url, data)
                console.log(response.data.message)
                setChangedImage(false)
                setImgUrlCloud(response.data.url)

            } catch (error) {
                console.error(error)
            }
            setLoad({...load, update: false})
            Swal.fire(
                'Actualizado!',
                'El item ha sido actualizado.',
                'success'
            )
        }
    }

    return <li>

        <form onSubmit={onSubmitForm}>
            <div className="img-container">
                <button type="button" onClick={emptyForm} className="close"></button>
                <label className="upload">
                    <input className="hidden" id={`file${item._id}`} type="file" name="file" onChange={onChangeHandler} accept='image/*'/>
                    <img src={item.img.url} id={`${item._id}`}/>
                </label>
            </div>
            <div className="inputs">
                <input className="input title" type="text" name="title" onChange={onChangeForm} placeholder="Titulo" defaultValue={item.title}/>
                <textarea className="input" type="text" name="description" onChange={onChangeForm} placeholder="Descripción" defaultValue={item.description}/>
                <AddTagToItem setDataForm={setDataForm} dataForm={dataForm} />
            </div>
            <div className="buttons">
                <button type="submit">{
                    load.update
                    ?
                        <Loading />
                    :
                        'Actualizar'
                }</button>
                <button type="button" onClick={deleteMenuItem}>{
                    load.delete
                    ?
                        <Loading />
                    :
                        'Eliminar'
                }</button>
            </div>
        </form>

        <style jsx>{`
        
            .close{
                visibility: ${changedImage ? 'visible' : 'hidden'}
            }
        
        `}</style>
 
        <style jsx>{`

            li {
                list-style: none;
            }

            form {
                display: grid;
                grid-template-columns: auto 1fr;
            }

            .img-container {
                position: relative;
                height: 300px;
                width: 200px;
                border: 1px solid #00000022;
                overflow: hidden;
                border-radius: 12px;
            }

            .upload {
                display: grid;
                justify-items: center;
                align-items: center;
                position: relative;
                cursor: pointer;
                height: 100%;
                width: 100% ;
                color: white;
            }

            img {
                position: absolute;
                border: none;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            .hidden {
                width: 0;
                height: 0;
                overflow: hidden;
                position: absolute;
            }

            .close {
                height: 20px;
                width: 20px;
                background: #fff url('/img/icons/close.svg') no-repeat center center;
                position: absolute;
                top: 10px;
                right: 10px;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                transition: transform .5s;
                z-index: 10;
                underline: none;
            }

            .close:hover {
                transform: scale(1.1);
            }

            .inputs {
                padding: 20px;
            }

            .title {
                font-size: 20px;
                margin-bottom: 20px;
            }

            .input {
                box-sizing: border-box;
                display: block;
                background-color: unset;
                border: none;
                border-bottom: 1px solid white;
                padding: 5px 10px;
                color: white;
                
            }

            textarea {
                width: 100%;
                outline: none;
            }

            .input::placeholder {
                color: white;
            }

            .buttons {
                grid-column: 1/3;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            .buttons > button {
                margin: 20px auto 0 auto;
                padding: 5px 10px;
                transition: background-color .5s;
                width: 100%;
                font-weight: bolder;
            }

            .buttons > button:nth-child(1) {
                background-color: #aaaaaabb;
                border-radius: 5px 0 0 5px;
            }

            .buttons > button:nth-child(2) {
                color: white;
                background-color: #aa3333bb;
                border-radius: 0 5px 5px 0;
            }

            .buttons > button:nth-child(1):hover {
                background-color: #ddd;
            }

            .buttons > button:nth-child(2):hover {
                background-color: #aa3333;
            }

        `}</style>
    </li>
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)