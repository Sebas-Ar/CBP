import { ObjectId } from "mongodb";
import { isImg } from "../utils/isImg";
import { formData } from '../utils/getImgForm'
import { uploadImg, deleteImg } from '../utils/imgControl'

export const getItems = async (req, res) => {

    const {category, subcategory} = req.query
    
    const menu = await req.db.collection('menu').find({category, subcategory}).toArray()
    
    res.status(200).send({menu})
    
}

export const uploadItem = async (req, res) => {
    
    const data = await formData(req)  
    
    let {name, path} = data.img
    const {title, description, categoryName, subcategoryName, tagList} = data.form

    const existTitle = await req.db.collection('menu').findOne({title})

    if (existTitle) {
        return res.status(200).json({error: true, message: 'El titulo ya esta en otro item'}) 
    }

    name = name.replace(/ /, '_')
    
    if (!isImg(name)) return res.status(415).send({message: 'El formato multimedia de los datos enviados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.'})
    
    
    const result = await uploadImg(name, path)
    
    const NAME_COLLECTION = 'menu'
    const MENU_ITEM = {
        title,
        description,
        img: {
            url: result.url,
            _id: result.public_id
        },
        tagList,
        category: categoryName, 
        subcategory: subcategoryName
    }
    
    await req.db.collection(NAME_COLLECTION).insertOne(MENU_ITEM)
    
    res.status(200).json({message: 'item uploaded', data: MENU_ITEM})
    
}

export const deleteItem = async (req, res) => {
    
    const { _id } = req.query
    
    const response = await req.db.collection('menu').findOneAndDelete({ _id: ObjectId(_id)})

    await deleteImg(response.value.img._id)

    res.status(200).json({message: 'item deleted'})
    
}

export const updateItem = async (req, res) => {

    const data = await formData(req)
    
    const {title, description, _id, tagList} = data.form
    let setting = {}
    let url = ''
    if(data.img) {

        let {name, path} = data.img

        name = name.replace(/ /, '_')
    
        if (!isImg(name)) return res.status(415).send({message: 'El formato multimedia de los datos enviados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.'})

        const item = await req.db.collection('menu').findOne({ _id: ObjectId(_id) })

        const public_id = item.img._id
        await deleteImg(public_id)
        
        const result = await uploadImg(name, path)
        url = result.url

        setting = {
            title,
            description,
            img: {
                url: result.url,
                _id: result.public_id
            },
            tagList
        }
    } else {
        setting = {
            title,
            description,
            tagList
        }
    }

    await req.db.collection('menu').findOneAndUpdate(
        { _id: ObjectId(_id) }, 
        {$set: setting}
    )
    
    res.status(200).send({message: 'item updated', url})
}