import React, { useState, useEffect } from 'react'
import MenuWrapper from '../components/menu/MenuWrapper'
import Layout from '../components/layout/Layout'
import axios from 'axios';

// redux
import { mapDispatchToProps, mapStateToProps } from "../redux/mapToProps/menuMapToProps";
import { useSelector, connect } from "react-redux";

const Menu = ({
    updateCategoryList, 
    updateSubcategoryList, 
    updateCategoryName, 
    updateSubcategoryName,
    updateItems,
    updateItemSelected,
    updateImgSelected,
    updateImgId
}) => {

    const {
        categoryName,
        subcategoryName,
        subCategoryList
    } = useSelector(state => state.menu)

    useEffect(() => {
        getMenu()
    }, []);

    useEffect(() => {
        if (categoryName && JSON.stringify(subCategoryList[categoryName]) !== '{}') {
            updateSubcategoryName(subCategoryList[categoryName][0])
        }
    }, [categoryName])

    useEffect(() => {
        if (categoryName && subcategoryName) {
            getItemList()
        }
    }, [subcategoryName])

    const getMenu = async () => {
        const url = '/api/category'
        const result = await axios.get(url)
        const {categories} = result.data
        let subactegoryList = {}
        const categoryList = categories.map( cat => {
            subactegoryList[cat.category] = cat.subCategories
            return cat.category
        })

        updateCategoryList(categoryList)
        updateSubcategoryList(subactegoryList)
        updateCategoryName(categoryList[0])
    }

    const getItemList = async () => {
        const url = `/api/menu?category=${categoryName}&subcategory=${subcategoryName}`
        const result = await axios.get(url)

        const items = result.data.menu 

        updateItems(items)
        updateItemSelected(items.length > 0 ? items[0].title : '')
        updateImgSelected(items.length > 0 ? items[0].img.url : '')
        updateImgId(items.length > 0 ? items[0]._id : '') 
        
    }

    return (
    
    <Layout> 
        <div className="container">
            <div className="left">
                <div className="two">
                    <div className="image">
                        <img className="img1" src="/img/comida1.png" alt="comida"/>
                        <img className="img2" src="/img/comida2.png" alt="comida"/>
                    </div>
                    <div className="sinColor"></div>
                </div>
                <div className="portada"></div>
            </div>

            <MenuWrapper />

            <style jsx>{`
                .container {
                    width: 100%;
                    height: 100vh;
                    min-height: 720px;
                    display: grid;
                    grid-template-columns: auto 1fr;
                }

                .left {
                    width: 35vw;
                    display: grid;
                    grid-template-columns: 1.3fr 1fr;
                }

                .two {
                    background: #A99767;
                    display: grid;
                    height: 100vh;
                    grid-template-rows: auto 100px;
                }

                .image {
                    margin: 10px;
                    justify-self: flex-end;
                    align-self: flex-end;
                    display: grid;
                    justify-items: flex-end;
                    transform: translateY(30px);
                }

                .img1 {
                    height:200px;
                }

                .img2 {
                    margin-top:20px;
                    height:200px;
                }

                .portada {
                    background-image: url("/img/Layer-7-copia.png");
                    background-size: auto 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }

                .sinColor {
                    background: white;
                }

                @media screen and (max-width: 1140px) {

                    .left {
                        width: 30vw;
                    }

                    .img1 {
                        height:150px;
                    }

                    .img2 {
                        height:150px;
                    }
                }

                @media screen and (max-width: 970px) {

                    .portada {
                        display: none;
                    }

                    .left {
                        width: 25vw;
                        grid-template-columns: 1fr;
                    }

                }

                @media screen and (max-width: 910px) {

                    .container {
                        grid-template-columns: 1fr
                    }

                    .left {
                        display: none;
                    }

                }
            `}</style>
        </div>
    </Layout>
    
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)