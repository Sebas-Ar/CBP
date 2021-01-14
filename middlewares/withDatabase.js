import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const {CBP_MONGODB_HOST, CBP_MONGODB_DATABASE} = process.env
const MONGODB_URI = `mongodb://${CBP_MONGODB_HOST}/${CBP_MONGODB_DATABASE}`

const client = new MongoClient(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const withDatabase = handler => (req, res) => {
    try {
        
        if (!client.isConnected()) {
            return client.connect().then(() => {
                req.db = client.db(CBP_MONGODB_DATABASE)
                return handler(req, res)
            })
        }

        req.db = client.db(CBP_MONGODB_DATABASE)
        return handler(req, res)

    } catch (error) {
       console.log(error) 
    }
}

export default withDatabase