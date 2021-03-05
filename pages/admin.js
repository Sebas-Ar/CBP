import { useState } from "react"

import AddItemToMenu from '../components/admin/menu/AddItemToMenu';
import Category from '../components/admin/category/Category';
import ItemList from '../components/admin/menu/ItemList';
import SelectCategory from '../components/admin/category/SelectCategory';
import Layout from '../components/layout/Layout';


const Admin = () => {

    const [activeCategory, setActiveCategory] = useState(false)

    return <div className="container">

        <Layout>
            <div className="margin"></div>
            <img src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia1.jpg" alt=""/>
            <SelectCategory setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
            <Category setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>  
            {/* <AddItemToMenu/> */}
            {/* <ItemList/> */}
            
        </Layout>

        <style jsx>{`
            button {
                display: block;
                padding: 10px;
                margin: 10px auto;
            }

            .container {
                position: relative;
                
            }
            .margin {
                height: 150px
            }

            img {
                object-fit: cover;
                object-position: center;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: -1
            }

        `}</style>
        
    </div>
}

export default Admin