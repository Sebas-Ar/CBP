import { ObjectId } from "mongodb";

export const getCategory = async (req, res) => {

    const {getCategories, getSubCategory, category} = req.query
    console.log(req.query)

    if (getCategories) {

        const categories = await req.db.collection('category').find(
            {}, 
            {projection: { _id: 0, category: 1}}
        ).toArray()
        res.status(200).send({categories})
        
    } else if (getSubCategory) {
        
        const categories = await req.db.collection('category').findOne(
            {category},
            {projection: { _id: 0, subCategories: 1}}
        )
        res.status(200).send(categories )

    } else {

        const categories = await req.db.collection('category').find({}).toArray()        
        res.status(200).send({categories})

    }

}

export const addCategories = async (req, res) => {
    
    const {category, categoryName , onSubCategory, subCategory} = req.body
    
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
        
        const newCategory = await req.db.collection('category').findOneAndUpdate(
            {category: categoryName}, 
            {$push: {subCategories: subCategory}}, 
            {returnOriginal : false}
        )

        /* await req.dbClient.close() */
        
        res.status(200).send({message: 'update Subcategory', data: newCategory.value.subCategories})
        
    } else {
        
        await req.db.collection('category').insertOne({category, subCategories: []})
        
        
        /* await req.dbClient.close() */
        res.status(200).send({message: true})
        
    }
    
    

}

export const updateCategory = async (req, res) => {
    
    const {category, newCategory, subcategory, newSubcategory} = req.body
    
    if (category && !subcategory) {

        await req.db.collection('category').findOneAndUpdate(
            {category}, 
            {$set: {category: newCategory}}
        )

        await req.db.collection('menu').updateMany(
            {category},
            {$set: {category: newCategory}}
        )
        
        
        
        res.status(200).send({message: 'updated category'})
        
    } else if (subcategory) {

        await req.db.collection('category').findOneAndUpdate(
            {category}, 
            {$pull: {subCategories: subcategory}}
        )
            
        await req.db.collection('category').findOneAndUpdate(
            {category}, 
            {$push: {subCategories: newSubcategory}}
        )

        await req.db.collection('menu').updateMany(
            {subcategory},
            {$set: {subcategory: newSubcategory}}
        )
        
        res.status(200).send({message: 'updated subcategory'})

    } else {

    }
    
}

export const deleteCategory = async (req, res) => {
    
    const {subcategoryName, categoryName, isSubcategory} = req.query
    
    if (isSubcategory) {

        const subcategoryInMenu = await req.db.collection('menu').find(
            {subcategory: subcategoryName}
        ).toArray()

        if (subcategoryInMenu.length) {
                
                res.status(200).send('subcategory has not been deleted, there are items in menu')

        } else {

            const newCategory = await req.db.collection('category').findOneAndUpdate(
                {category: categoryName}, 
                {$pull: {subCategories: subcategoryName}}, 
                {returnOriginal : false}
            )
            
            res.status(200).send({message: 'Subcategory has been deleted', data: newCategory.value.subCategories})

        }
        
    } else {
        console.log(categoryName)

        const categoryInMenu = await req.db.collection('menu').find(
            {category: categoryName}
        ).toArray()

        if (categoryInMenu.length) {

            res.status(200).send({message: 'category has not been deleted, there are items in menu'})
            
        } else {
            
            const categorie = await req.db.collection('category').findOne(
                {category: categoryName},
                {projection: { _id: 0, subCategories: 1}}
            )
            
            if (categorie.subCategories.length) {

                res.status(200).send({message: 'category has not been deleted, the subcategory should be empty'})

            } else {

                await req.db.collection('category').findOneAndDelete(
                    {category: categoryName}
                )
                res.status(200).send({message: 'category has been deleted'})

            }


        }
        

    }

}