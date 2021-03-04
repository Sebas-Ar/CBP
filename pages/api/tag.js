// controllers
import { uploadTag, getTagList, deleteTag, updateTag } from "../../controllers/tagController";

// middleware
import middleware from "../../middlewares/withMiddlewares";

const uploadImg = (req, res) => {

    if (req.method === 'GET') {

        getTagList(req, res)

    } else if (req.method === 'POST') {

        uploadTag(req, res)
                
    } else if (req.method === 'PUT') {
        
        updateTag(req, res)

    } else if (req.method === 'DELETE') {

        deleteTag(req, res)

    } else {

        res.status(405).send({message: 'method unsupport'})

    }
    
}

export default middleware(uploadImg)