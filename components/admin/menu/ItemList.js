import Item from './Item'
import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../redux/mapToProps/menuMapToProps";

const ItemList = () => {

    const { itemsList, categoryName, subcategoryName } = useSelector(state => state.menu)

    return categoryName && subcategoryName

    ?

    <section className="container">

        <h2>LISTA DE ITEMS</h2>

        <ul>
        {
            itemsList.length === 0 ? <p>No hay Items</p> : null
        }
        {
            itemsList.reverse().map((item, index) => (
                <Item key={index} item={item} num={index}/>
            ))
        }
        </ul>

        <style jsx>{`

            .container {
                padding: 20px;
                box-sizing: border-box;
                border-radius: 20px;
                margin: 60px auto;
                width: 50%;
                background-color: #111111aa;
            }

            h2 {
                color: white;
                margin-bottom: 20px;
                text-align: center;
            }

            ul {
                display: grid;
                grid-row-gap: 40px;
            }

            p {
                text-align: center;
                color: white;
            }


        `}</style>
    </section>

    :

    null
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)