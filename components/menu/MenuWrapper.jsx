import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'

import SubcategoryList from './SubcategoryList'
import CategoryList from './CategoryList'
import Item from './Item'
import ItemListWrapper from './ItemListWrapper'

import {
    mapStateToProps,
    mapDispatchToProps,
} from '../../redux/mapToProps/menuMapToProps'

const MenuWrapper = () => {
    const {
        categoryList,
        subCategoryList,
        categoryName,
        itemsList,
        imgSelected,
    } = useSelector((state) => state.menu)

    const [turnOn, setTurnOn] = useState(true)

    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        if (categoryName && subCategoryList[categoryName]) {
            setSubcategories(subCategoryList[categoryName])
        }
    }, [categoryName, subCategoryList])

    // Funcion pasada a item para activar/desactivar lo comentarios
    const comments = () => {
        setTurnOn(!turnOn)
    }

    return (
        <div className="content">
            <nav>
                {categoryList.map((category) => (
                    <CategoryList key={category} category={category} />
                ))}
                <ul className="subcategory">
                    {subcategories.map((subcategory) => (
                        <SubcategoryList
                            key={subcategory}
                            subcategory={subcategory}
                        />
                    ))}
                </ul>
            </nav>

            <ItemListWrapper
                comments={comments}
                turnOn={turnOn}
                img={imgSelected}
            >
                <ul>
                    {itemsList.map((item) => (
                        <Item
                            key={item._id}
                            comments={comments}
                            item={item}
                            title={item.title}
                            text={item.description}
                            tagList={item.tagList}
                            img={item.img.url}
                        />
                    ))}
                </ul>
            </ItemListWrapper>

            <style jsx>{`
                .content {
                    justify-self: center;
                    align-self: center;
                    width: 650px;
                    z-index: 200;
                }

                nav {
                    display: grid;
                    grid-template-columns: repeat(${categoryList.length}, 1fr);
                    grid-column-gap: 1px;
                    width: 100%;
                }

                .subcategory {
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-columns: ${subcategories.length <= 3
                        ? `repeat(${subcategories.length}, 1fr)`
                        : 'repeat(4, 1fr))'};
                }

                nav > ul {
                    grid-column: 1 / ${categoryList.length + 1};
                    background: #f1d58c;
                    display: grid;
                    justify-items: center;
                    transition: display 5s 5s;
                }

                /*item*/

                .description {
                    display: grid;
                    grid-template-columns: 1fr 5fr;
                }

                .description > p {
                    align-self: center;
                }

                .linea {
                    height: 60%;
                    width: 3px;
                    background: #a99767;
                    justify-self: flex-end;
                    margin-right: 20px;
                    align-self: center;
                }
                .info {
                    display: grid;
                    grid-template-rows: 1fr 1fr 1.5fr 1fr 2fr;
                    margin: 60px 10px 0 50px;
                }

                .info > h3 {
                    font-size: 30px;
                    font-weight: 900;
                    color: #a99767;
                    position: relative;
                }

                .info > h3::before {
                    content: ' ';
                    position: absolute;
                    left: -25px;
                    top: 10px;
                    height: 10px;
                    width: 10px;
                    background: #a99767;
                    border-radius: 50%;
                }

                .info > div > span {
                    background: #a99767;
                    padding: 6px 20px;
                    font-size: 12px;
                    color: white;
                }

                .info > .precio {
                    text-align: center;
                    font-size: 40px;
                    color: #a99767;
                }

                .item {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                }

                .item > img {
                    margin: 40px 20px 0px 10px;
                    height: 360px;
                    justify-self: center;
                    align-self: center;
                }

                @media screen and (max-width: 700px) {
                    .content {
                        justify-self: center;
                        align-self: center;
                        width: 100%;
                        z-index: 200;
                    }
                }

                @media screen and (max-width: 570px) {
                    .content {
                        margin-top: 100px;
                    }
                }
            `}</style>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuWrapper)
