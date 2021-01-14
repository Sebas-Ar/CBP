import Axios from "axios"
import { useEffect } from "react";
import { connect, useSelector } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const SelectCategory = ({ updateCategoryName, updateSubcategoryName, updateSubcategoryList, updateCategoryList, updateItems }) => {

    const {
        categoryList, 
        subCategoryList,
        categoryName,
        subcategoryName
    } = useSelector(state => state.menu)

    
    useEffect(() => {
        updateSubcategoryName('')
        const option = document.getElementById('sub')
        option.selected = true
    }, [categoryName]);
    
    useEffect(() => {
        getCategory()        
    }, [])

    useEffect(() => {
        getItems()
    }, [subcategoryName]);

    const getCategory = async () => {
        const url = '/api/category?getCategories=1'
        const result = await Axios.get(url)
        updateCategoryList(result.data.categories)
    }
    
    const getItems = async () => {
        if (subcategoryName && categoryName) {
            const url = `/api/menu?category=${categoryName}&subcategory=${subcategoryName}`
            const result = await Axios.get(url)
            updateItems(result.data.menu)
        }
    }

    const selectCategory = async  e => {
        updateCategoryName(e.target.value)
        const url = `/api/category?getSubCategory=1&category=${e.target.value}`
        const result = await Axios.get(url) 
        updateSubcategoryList(result.data.subCategories)
    }

    const selectSubCategory = async e => {
        updateSubcategoryName(e.target.value)
    }

    return <div className="container">

        <select onChange={selectCategory}>
            <option value="">-</option>
            {
                categoryList.map((item, index) => (
                    <option key={index} value={item.category}>{item.category}</option>
                ))
            }   
        </select>
        <select onChange={selectSubCategory}>
            <option id={'sub'} value="">-</option>
            {
                subCategoryList.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))
            }
        </select>

        <style jsx>{`

            .container {
                
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory)