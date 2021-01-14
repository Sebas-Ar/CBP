// controllers
import {getItems, uploadItem, deleteItem} from "../../controllers/menuController";

// middleware
import middleware from "../../middlewares/withMiddlewares";

export const config = {
    api: {
        bodyParser: false,
    }
}

const uploadImg = (req, res) => {

    if (req.method === 'GET') {

        getItems(req, res)

    } else if (req.method === 'POST') {

        uploadItem(req, res)
                
    } else if (req.method === 'DELETE') {

        deleteItem(req, res)

    } else {

        res.status(405).send({message: 'method unsupport'})

    }
    
}

export default middleware(uploadImg)

