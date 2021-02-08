import { ObjectId } from "mongodb"

export const uploadComment = async (req, res) => {

    const { imgId, name, comment } = req.body

    await req.db.collection('menu').findOneAndUpdate(
        {_id: ObjectId(imgId)},
        {$push: {
            comments: {
                name,
                comment
            } 
        }}
    )

    res.send({message: 'comment succesfull added'})
}

export const getComments = async (req, res) => {

    const { imgId } = req.query

    const commentList = await req.db.collection('menu').findOne(
        {_id: ObjectId(imgId)},
        {projection: {comments: true, _id: false}}
    )

    res.send({commentList})
}