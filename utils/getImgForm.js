import { IncomingForm } from "formidable";

export const formData = async (req) => {
    return new Promise((resolve, reject) => {
            
        const form = new IncomingForm()
        
        form.parse(req, (err, fields, files) => {
            
            if (err) return reject(err)

            const {img} = files
            const {dataForm} = fields

            let resolveObject = {}

            if (img) resolveObject.img = {
                name: img.name,
                path: img.path
            }

            if (dataForm) resolveObject.form = JSON.parse(dataForm)

            resolve(resolveObject)
            
        })
        
    })
} 
    