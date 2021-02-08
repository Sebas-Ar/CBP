import MenuItem from './MenuItem'
import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const MenuList = () => {

    const { itemsList } = useSelector(state => state.menu)

    return <section className="container">

        <ul>
        {
            itemsList.length === 0 ? <p>No hay Items</p> : null
        }
        {
            itemsList.reverse().map((item, index) => (
                <MenuItem key={index} item={item} num={index}/>
            ))
        }
        </ul>

        <style jsx>{`

            .container {
                padding: 20px;
                box-sizing: border-box;
                border-radius: 20px;
                margin: auto;
                width: 50%;
                background-color: #111111aa;
                margin-bottom: 30px;
            }

            p {
                text-align: center;
                color: white;
            }


        `}</style>
    </section>
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)