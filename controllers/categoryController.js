import { ObjectId } from "mongodb";

export const getCategory = async (req, res) => {

    const {getCategories, getSubCategory, category} = req.query
    console.log(req.query)

    if (getCategories) {

        const categories = await req.db.collection('category').find({}, {projection: { _id: 0, category: 1}}).toArray()
        res.status(200).send({categories})
        
    } else if (getSubCategory) {
        
        const categories = await req.db.collection('category').findOne({category}, {projection: { _id: 0, subCategories: 1}})
        res.status(200).send(categories )

    } else {

        const categories = await req.db.collection('category').find({}).toArray()        
        res.status(200).send({categories})

    }

}

export const addCategories = async (req, res) => {
    
    const {category, _id, onSubCategory, subCategory} = req.body
    
    const categories = await req.db.collection('category').find({}).toArray()
    
    let repeatCategory = false
    let repeatSubCategory = false
    
    categories.forEach(item => {
        if (item.category === category) repeatCategory = true 
        item.subCategories.forEach(sub => {
            if (sub === subCategory) repeatSubCategory = true
        })
    })
    
    if (repeatCategory || repeatSubCategory) {        
        /* await req.dbClient.close() */
        return res.status(400).send({message: false})
    }
    
    if (onSubCategory) {
        
        await req.db.collection('category').findOneAndUpdate({_id: ObjectId(_id)}, {$push: {subCategories: subCategory}})
        /* await req.dbClient.close() */
        
        res.status(200).send({message: 'update Subcategory'})
        
    } else {
        
        await req.db.collection('category').insertOne({category, subCategories: []})
        
        /* await req.dbClient.close() */
        res.status(200).send({message: true})
        
    }
    
    

}

export const updateCategory = async (req, res) => {
    
    const {category, _id} = req.body
    
    
    const item = await req.db.collection('category').findOneAndUpdate({_id: ObjectId(_id)}, {$set: {category}}, {returnOriginal : false})
    
    /* await req.dbClient.close() */
    res.status(200).send({message: 'updated category', data: item.value})
    
}

export const deleteCategory = async (req, res) => {
    
    const {_id} = req.query
    
    await req.db.collection('category').deleteOne({_id: ObjectId(_id)})
    
    /* await req.dbClient.close() */
    res.status(200).send({message: 'category has been deleted'})

}