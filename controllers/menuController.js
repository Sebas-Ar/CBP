import { IncomingForm } from "formidable";
import fs from "fs";
import { ObjectId } from "mongodb";
import {isImg} from "../utils/isImg";
import cloudinary from 'cloudinary'

export const getItems = async (req, res) => {

    const {category, subcategory} = req.query
    
    const menu = await req.db.collection('menu').find({category, subcategory}).toArray()
    
    res.status(200).send({menu})
    
}

export const uploadItem = async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
        
        const form = new IncomingForm()
        
        form.parse(req, (err, fields, files) => {
            
            if (err) return reject(err)

            resolve({
                form: JSON.parse(fields.dataForm), 
                img: {
                    name: files.img.name,
                    path: files.img.path
                }
            })
            
        })
        
    })    
    
    let {name, path} = data.img

    name = name.replace(/ /, '_')
    
    if (!isImg(name)) return res.status(415).send({message: 'El formato multimedia de los datos enviados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.'})
    
    const {title, description, categoryName, subcategoryName} = data.form
    const IMAGE_PATH_FOLDER = `${process.cwd()}/public/static/menu-imgs`
    
    const folderExist = fs.existsSync(IMAGE_PATH_FOLDER)
    if (!folderExist) fs.mkdirSync(IMAGE_PATH_FOLDER)
    
    const contents = await fs.promises.readFile(path, {
        encoding: 'binary'
    })

    const IMAGE_PATH = `${IMAGE_PATH_FOLDER}/${name}`
    
    await fs.promises.writeFile(IMAGE_PATH, contents, 'binary')

    cloudinary.config({
        cloud_name: 'agua-e-panela-agencia-visual',
        api_key: '517482543919955',
        api_secret: '4-CP-HOFM4o3r9TYnS7t0bXXQPc'
    })

    const result = await cloudinary.v2.uploader.upload(IMAGE_PATH)

    console.log(result)
    
    const NAME_COLLECTION = 'menu'
    const MENU_ITEM = {
        title,
        description,
        img: {
            name,
            url: result.url,
            _id: result.public_id
        },
        category: categoryName, 
        subcategory: subcategoryName
    }
    
    const newItem = await req.db.collection(NAME_COLLECTION).insertOne(MENU_ITEM)
    
    /* await req.dbClient.close() */
    res.status(200).send({message: 'item uploaded', data: newItem.ops})
    
}

export const deleteItem = async (req, res) => {
    
    const { _id, name } = req.query
    
    await req.db.collection('menu').deleteOne({ _id: ObjectId(_id)})

    const path = `${process.cwd()}/public/static/menu-imgs/${name}`

    const existFile = fs.existsSync(path)

    if (existFile) fs.unlinkSync(path)
    
    res.status(200).send({message: 'item deleted'})
    
}