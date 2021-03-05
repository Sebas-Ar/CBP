import Axios from "axios"
import { useEffect } from "react";
import { connect, useSelector } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";

const SelectCategory = ({ updateCategoryName, updateSubcategoryName, updateSubcategoryList, updateCategoryList, updateItems, setActiveCategory, activeCategory }) => {

    const {
        categoryList, 
        subCategoryList,
        categoryName,
        subcategoryName
    } = useSelector(state => state.menu)

    
    useEffect(() => {
        /* updateSubcategoryName('')
        const option = document.getElementById('sub')
        option.selected = true */
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

        <h2>Seleccione la categoria y subcategoria</h2>

        <div className="wrapper">
            {/* <select onChange={selectCategory} value={categoryName}>
                <option value="">-</option>
                {
                    categoryList && categoryList.length
                    ?
                        categoryList.map((item, index) => (
                            <option key={index} value={item.category}>{item.category}</option>
                        ))
                    :
                        null
                }   
            </select> */}
            <div className="linea"></div>
            {/* <select onChange={selectSubCategory} value={subcategoryName}>
                <option id={'sub'} value="">-</option>
                {
                    subCategoryList && subCategoryList.length
                    ?
                        subCategoryList.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    :
                            null
                }
            </select> */}
            <svg viewBox="0 0 640 512" onClick={() => setActiveCategory(!activeCategory)}>
                <path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"/>
            </svg>
        </div>

        <style jsx>{`

            .container {
                padding: 20px;
                box-sizing: border-box;
                border-radius: 20px;
                margin: 30px auto;
                width: 50%;
                background-color: #111111aa;
            }

            h2 {
                color: white;
                text-align: center;
            }

            .wrapper {
                margin:  20px auto 0 auto;   
                width: 200px;
                display: grid;
                grid-template-columns: 1fr 1px 1fr 60px;
            }

            select {
                padding: 10px 10px;
                border: none;
                outline: none;
                color: black;
                font-weight: bolder;
            }

            select:nth-child(1) {
                border-radius: 25px 0 0 25px;
            }

            select:nth-child(3) {
                border-radius: 0 25px 25px 0;
            }

            svg {
                align-self: center;
                width: 30px;
                justify-self: center;
                color: #ccc;
                transition: color .5s, transform .5s;
                cursor: pointer
            }
            svg:hover {
                color: white;
                transform: scale(1.1)
            }

            option {
                font-weight: bolder;
            }

        `}</style>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory)