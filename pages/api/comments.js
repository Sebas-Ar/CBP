// controllers
import { uploadComment, getComments } from "../../controllers/commentsController";

// middleware
import middleware from "../../middlewares/withMiddlewares";

const uploadImg = (req, res) => {

    if (req.method === 'GET') {

        getComments(req, res)

    } else if (req.method === 'POST') {

        uploadComment(req, res)
                
    } else if (req.method === 'DELETE') {

        /* deleteItem(req, res) */

    } else {

        res.status(405).send({message: 'method unsupport'})

    }
    
}

export default middleware(uploadImg)
