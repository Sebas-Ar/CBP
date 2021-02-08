import React, { useState, useEffect } from 'react'
import NavList from './NavList';
import NavButton from './NavButton';
import ItemList from './ItemList';
import Item from './Item';

import { useSelector, connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const NavMenu = (props) => {

    const {
        categoryList,
        subCategoryList, 
        categoryName,
        itemsList,
        imgSelected
    } = useSelector(state => state.menu)
    
    //Menu principal seleccionado
    const [menu, setMenu] = useState(0);
    //submenú seleccionado
    const [submenu, setSubmenu] = useState(0);
    //Item seleccionado
    const [item, setItem] = useState(0);
    //muestra el área de comentarios
    const [turnOn, setTurnOn] = useState(true);

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {

        if (categoryName && subCategoryList[categoryName]) {
            setSubcategories(subCategoryList[categoryName])
        }
        
    }, [categoryName, subCategoryList])

    //Obtiene la ubicacion del menú principal del elemnto padre
    /* useEffect(() => {
        props.change(menu)
    }); */

    //Cambia el submenu y el item a la posicion '0' al cambiar el munú principal
    /* useEffect(() => {
        setItem(0)
        setSubmenu(0)
    }, [menu]); */
    
    //Cambia el item a la posicion '0' al cambiar el submunú
    /* useEffect(() => {
        setItem(0)
    }, [submenu]); */

    //Funcion pasada a los NavButton para cambiar el menú principal
    function changeBut(men) {
        setMenu(men)
    }

    //Funcion pasada a los NavList para cambiar el submenú
    function changeLi(sub) {
        setSubmenu(sub)
    }

    //Funcion pasada a los ItemList para cambiar el item
    function changeItem(it) {
        setItem(it)
    }

    //Funcion pasada a item para activar/desactivar lo comentarios
    const comments = () => {
        setTurnOn(!turnOn)
    }

    return ( 

    <div className="content">
        <nav>
            {
                categoryList.map((item, i) => (
                    <NavButton key={i} changeBut={changeBut} menu={menu} text={item} change={i} /> 
                ))
            }
            <ul className="subcategory" >
            {
                subcategories.map((item, i) => (
                        <NavList key={i} changeLi={changeLi} sub={submenu} text={item} change={i} />
                ))
            }
            </ul>
        </nav>
        
        <Item comments={comments} turnOn={turnOn} img={imgSelected}>
            <ul>
                {   
                    itemsList.map((item, i) => (
                        <ItemList key={i} comments={comments} changeItem={changeItem} submenu={submenu} item={item} title={item.title} price={''} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, esse.'} category={["Fresco", "Frio", "Lorem"]} change="0" id={item._id} img={item.img.name} />
                    ))
                }
            </ul>
        </Item>
        
        
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
                grid-template-columns: ${subcategories.length <= 3 ? `repeat(${subcategories.length}, 1fr)` : 'repeat(4, 1fr))'};
            }

            nav > ul {
                grid-column: 1/${categoryList.length + 1};
                background: #F1D58C;
                display: grid;
                justify-items: center;
                transition: display 5s 5s;
            }

            /*item*/

            .description {
                display:grid;
                grid-template-columns: 1fr 5fr;
            }

            .description > p {
                align-self: center;
            }

            .linea {
                height: 60%;
                width: 3px;
                background: #A99767;
                justify-self: flex-end;
                margin-right: 20px;
                align-self: center;

            }
            .info {
                display:grid;
                grid-template-rows: 1fr 1fr 1.5fr 1fr 2fr;
                margin: 60px 10px 0 50px;
            }

            .info > h3 {
                font-size: 30px;
                font-weight: 900;
                color: #A99767;
                position: relative;
            }

            .info > h3::before {
                content: " ";
                position: absolute;
                left: -25px;
                top: 10px;
                height: 10px;
                width: 10px;
                background: #A99767;
                border-radius: 50%;
            }

            .info > div > span {
                background: #A99767;
                padding: 6px 20px;
                font-size: 12px;
                color: white;
            }

            .info > .precio {
                text-align: center;
                font-size: 40px;
                color: #A99767;
            }

            .item {
                display: grid;
                grid-template-columns: 2fr 1fr;
            }

            .item > img {
                margin: 40px 20px 0px 10px;
                height: 360px;
                justify-self:center;
                align-self:center;
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

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)