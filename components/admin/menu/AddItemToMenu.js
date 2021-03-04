import { useEffect, useState } from 'react'
import axios from "axios"
import {isImg} from "../../../utils/isImg"
import { connect, useSelector } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";
import Loading from '../../loading/Loading';
import Swal from "sweetalert2"
import AddTagToItem from './AddTagToItem';

const AddItemToMenu = ({updateItems}) => {

    const {
        itemsList,
        categoryName,
        subcategoryName,
    } = useSelector(state => state.menu)

    const [selectedFile, setSelectedFile] = useState(undefined)
    const [dataForm, setDataForm] = useState({
        tagList: []
    });
    const [load, setLoad] = useState(false)
    const [imgSelected, setImgSelected] = useState(false)

    useEffect(() => {
        setDataForm(Object.assign({}, dataForm, {categoryName, subcategoryName}))
    }, [categoryName, subcategoryName])

    const onChangeHandler = e => {
        
        const img = document.getElementById('img')
        
        if (isImg(e.target.files[0]?.name)) {
            
            setSelectedFile(e.target.files[0])
            const objetURL = URL.createObjectURL(e.target.files[0])
            img.src = objetURL
            img.style.visibility = 'visible'
            setImgSelected(true)

        } else {
            console.log('el archivo debe ser imagen')
            img.style.visibility = 'hidden'
            setSelectedFile(undefined)
            setImgSelected(false)
        }
    }
    
    const emptyForm = () => {
        
        const img = document.getElementById('img')
        const file = document.getElementsByClassName('file')
        img.style.visibility = 'hidden'
        file.value = ''
        setSelectedFile(undefined)
        setImgSelected(false)
        
    }

    const onChangeForm = e => {
        setDataForm(Object.assign({}, dataForm, {[e.target.name]: e.target.value}))
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        if (dataForm.title && dataForm.description && selectedFile) {

            setLoad(true)
            const data = new FormData()
            data.append('img', selectedFile)
            data.append('dataForm', JSON.stringify(dataForm))
            
            const url = '/api/menu'
            
            try {
                
                const response = await axios.post(url, data)
                const newItem = response.data.data
                if (response.data.error) {
                    Swal.fire(
                        'Error!',
                        response.data.message,
                        'warning'
                    )
                    return null
                }
                let menuCopy = [...itemsList] 
                menuCopy.unshift(newItem)
                updateItems(menuCopy.reverse())
                setDataForm({tagList: []})
                emptyForm()
                Swal.fire(
                    'Agregado!',
                    'El item ha sido agregado.',
                    'success'
                )
    
            } catch (error) {
                console.error(error)
            } finally {
                setLoad(false)
            }
        } else {
            Swal.fire(
                'Error!',
                'No se pueden dejar campos vacios.',
                'warning'
            )
        }
        
    }

    return <section className="container">

        <h2>AGREGAR ITEM</h2>

        <form onSubmit={onSubmitForm}>
            <div className="img-container">
                <button type="button" onClick={emptyForm} className="close"></button>
                <label className="upload">
                    <span>Seleccionar imagen</span>
                    <input className="hidden" id="file" type="file" name="file" onChange={onChangeHandler} accept='image/*'/>
                    <img id='img'/>
                </label>
            </div>
            <div className="inputs">
                <input className="input title" type="text" name="title" value={dataForm.title ? dataForm.title : ''} onChange={onChangeForm} placeholder="Titulo"/>
                <textarea className="input" type="text" name="description" value={dataForm.description ? dataForm.description : ''} onChange={onChangeForm} placeholder="Descripción" rows="3"/>
                <AddTagToItem setDataForm={setDataForm} dataForm={dataForm} />
            </div>
            <button type="submit">{
                load
                ?
                    <Loading />
                :
                    'upload'
            }</button>
        </form>

        <style jsx>{`
        
            .container {
                height: ${categoryName && subcategoryName ? '420px' : '0px'};
                padding: ${categoryName && subcategoryName ? '20px' : '0px'};
            }

            .close {
                visibility: ${imgSelected ? 'visible' : 'hidden'}
            }
        
        `}</style>

        <style jsx>{`

            .container {
                overflow: hidden;
                box-sizing: border-box;
                border-radius: 20px;
                margin: 30px auto;
                width: 50%;
                background-color: #111111aa;
                transition: height .5s;
            }

            h2 {
                text-align: center;
                color: white;
            }

            form {
                display: grid;
                grid-template-columns: auto 1fr;
            }

            label > span {
                visibility: ${imgSelected ? 'hidden' : 'visible'}
            }
            span {
                border: none;
            }

            .img-container {
                border: 1px solid #aaaaaabb;
                position: relative;
                height: 300px;
                width: 200px;
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
                outline: none;
                object-fit: cover;
                width: 100%;
                height: 100%;
                visibility: hidden;
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
                background-size: 30%;
                position: absolute;
                top: 15px;
                right: 15px;
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

            form > button {
                grid-column: 1/3;
                margin: 20px auto 0 auto;
                padding: 5px 10px;
                border-radius: 5px;
                transition: background-color .5s;
                width: 100%;
                background-color: #aaaaaabb;
                font-weight: bolder;
            }

            form > button:hover {
                background-color: #ddd;
            }


        `}</style>
        
    </section>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemToMenu)