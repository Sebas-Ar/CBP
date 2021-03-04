import cloudinary from 'cloudinary'
import fs from "fs"

cloudinary.config({
    cloud_name: 'agua-e-panela-agencia-visual',
    api_key: '517482543919955',
    api_secret: '4-CP-HOFM4o3r9TYnS7t0bXXQPc'
})

const IMAGE_PATH_FOLDER = `${process.cwd()}/public/menu-imgs`

export const uploadImg = async (name, path) => {
    
    const folderExist = fs.existsSync(IMAGE_PATH_FOLDER)
    if (!folderExist) fs.mkdirSync(IMAGE_PATH_FOLDER)
    
    const contents = await fs.promises.readFile(path, {
        encoding: 'binary'
    })

    const IMAGE_PATH = `${IMAGE_PATH_FOLDER}/${name}`
    
    await fs.promises.writeFile(IMAGE_PATH, contents, 'binary')

    const result = await cloudinary.v2.uploader.upload(IMAGE_PATH)

    await fs.promises.unlink(IMAGE_PATH)

    return result
}

export const deleteImg = async (public_id) => {
    await cloudinary.v2.uploader.destroy(public_id)
}