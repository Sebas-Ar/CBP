// controllers
import {addCategories, getCategory, updateCategory, deleteCategory} from "../../controllers/categoryController";

// middleware
import middleware from "../../middlewares/withMiddlewares";

const uploadImg = (req, res) => {

    if (req.method === 'GET') {

        getCategory(req, res)

    } else if (req.method === 'POST') {

        addCategories(req, res)
                
    } else if (req.method === 'PUT') {
        
        updateCategory(req, res)

    } else if (req.method === 'DELETE') {

        deleteCategory(req, res)

    } else {

        res.status(405).send({message: 'method unsupport'})

    }
    
}

export default middleware(uploadImg)