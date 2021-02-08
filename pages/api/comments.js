// controllers
import { uploadComment } from "../../controllers/commentsController";

// middleware
import middleware from "../../middlewares/withMiddlewares";

const uploadImg = (req, res) => {

    if (req.method === 'GET') {

        /* getItems(req, res) */

    } else if (req.method === 'POST') {

        uploadComment(req, res)
                
    } else if (req.method === 'DELETE') {

        /* deleteItem(req, res) */

    } else {

        res.status(405).send({message: 'method unsupport'})

    }
    
}

export default middleware(uploadImg)
