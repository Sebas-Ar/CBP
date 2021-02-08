import { IncomingForm } from "formidable";
import fs from "fs";
import { ObjectId } from "mongodb";
import {isImg} from "../utils/isImg";

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
    const IMAGES_ROUTE = `${process.cwd()}/public/menu-imgs`
    
    const folderExist = fs.existsSync(IMAGES_ROUTE)
    if (!folderExist) fs.mkdirSync(IMAGES_ROUTE)
    
    const contents = await fs.promises.readFile(path, {
        encoding: 'binary'
    })
    
    await fs.promises.writeFile(`${IMAGES_ROUTE}/${name}`, contents, 'binary')
    
    const NAME_COLLECTION = 'menu'
    const MENU_ITEM = {
        title,
        description,
        img: {
            name,
            path: IMAGES_ROUTE
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

    const path = `${process.cwd()}/public/menu-imgs/${name}`

    const existFile = fs.existsSync(path)

    if (existFile) fs.unlinkSync(path)
    
    res.status(200).send({message: 'item deleted'})
    
}