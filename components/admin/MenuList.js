import MenuItem from './MenuItem'
import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const MenuList = () => {

    const { itemsList } = useSelector(state => state.menu)

    return <section className="container">

        <ul>
        {
            itemsList.reverse().map((item, index) => (
                <MenuItem key={index} item={item} num={index}/>
            ))
        }
        </ul>

        <style jsx>{`

            .container {
                
            }


        `}</style>
    </section>
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)