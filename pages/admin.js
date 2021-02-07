
import AddToMenu from '../components/admin/AddToMenu';
import Category from '../components/admin/Category';
import MenuList from '../components/admin/MenuList';
import SelectCategory from '../components/admin/SelectCategory';
import Layout from '../components/layout/Layout';

const Admin = () => {

    return <div className="container">

        <Layout>
            <div className="margin"></div>
            <img src="/img/cbp-capital-bistro-panama-restaurante-casco-viejo-panama--terraza-roofrop-salon-privado-vista-al-mar-restaurant-bebidas-bar-historia1.jpg" alt=""/>
            <SelectCategory/>
            <Category/>    
            <AddToMenu/>
            <MenuList/>
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