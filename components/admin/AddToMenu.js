import { useEffect, useState } from 'react'
import axios from "axios"
import {isImg} from "../../utils/isImg"
import { connect, useSelector } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const AddToMenu = ({updateItems}) => {

    const {
        itemsList,
        categoryName,
        subcategoryName,
    } = useSelector(state => state.menu)

    const [selectedFile, setSelectedFile] = useState(undefined)
    const [dataForm, setDataForm] = useState({});

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
            
        } else {
            console.log('el archivo debe ser imagen')
            img.style.visibility = 'hidden'
        }
    }
    
    const emptyForm = () => {
        
        const img = document.getElementById('img')
        const file = document.getElementsByClassName('file')
        img.style.visibility = 'hidden'
        file.value = ''
        
    }

    const onChangeForm = e => {
        setDataForm(Object.assign({}, dataForm, {[e.target.name]: e.target.value}))
    }

    const onSubmitForm = async e => {
        e.preventDefault()
        
        const data = new FormData()
        data.append('img', selectedFile)
        data.append('dataForm', JSON.stringify(dataForm))
        
        const url = '/api/menu'
        
        try {
            
            const response = await axios.post(url, data)
            const newItem = response.data.data[0]
            
            let menuCopy = [...itemsList] 
            menuCopy.unshift(newItem)
            updateItems(menuCopy.reverse())

        } catch (error) {
            console.error(error)
        }

        
    }

    return <section className="container">

        <h2>ITEMS</h2>

        <form onSubmit={onSubmitForm}>
            <input type="text" name="title" onChange={onChangeForm}/>
            <input type="text" name="description" onChange={onChangeForm}/>
            <div className="img-container">
                <button type="button" onClick={emptyForm} className="close"></button>
                <label className="upload">
                    <span>Seleccionar imagen</span>
                    <input className="hidden" id="file" type="file" name="file" onChange={onChangeHandler} accept='image/*'/>
                    <img id='img'/>
                </label>
            </div>
            <button type="submit">upload</button>
        </form>

        <style jsx>{`

            .container {
                box-sizing: border-box;
                padding: 20px;
                border-radius: 20px;
                background-color: #a99767cc;
                margin: 30px auto;
                width: 50%;

            }

            h2 {
                text-align: center;
                color: white;
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


        `}</style>
    </section>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToMenu)