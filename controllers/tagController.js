import { ObjectId } from "mongodb"

export const uploadTag = async (req, res) => {

    const {tag} = req.body

    await req.db.collection('tag').insertOne({name: tag})

    res.status(200).json({message: 'tag guardado'})
}

export const getTagList = async (req, res) => {

    const data = await req.db.collection('tag').find({}, {projection: { _id: false, name: true }}).toArray()

    const tagList = data.map(tag => tag.name)

    res.status(200).json({message: 'tags enviados', tagList})
}

export const deleteTag = async (req, res) => {

    const {tag} = req.query

    await req.db.collection('tag').deleteOne({name: tag})
    await req.db.collection('menu').updateMany(
        { tagList: tag },
        { $pull: { tagList: tag } }
    )

    res.status(200).json({message: 'tag deleted'})
}

export const updateTag = async (req, res) => {
    const {tag, newTag} = req.body

    await req.db.collection('tag').findOneAndUpdate({name: tag}, {$set: {name: newTag}})
    await req.db.collection('menu').updateMany(
        { tagList: tag },
        { $set: { 'tagList.$[]' : newTag } }
    )

    res.status(200).json({message: 'tag updated'})
}