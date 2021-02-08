import Axios from "axios"
import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapToProps/menuMapToProps";

const MenuItem = ({item, num, updateItems}) => {

    const {itemsList} = useSelector(state => state.menu)

    const deleteMenuItem = async () => {
        let newItemsList = [...itemsList]
        newItemsList.splice(num, 1)
        updateItems(newItemsList)
        
        try {
            const url = `/api/menu?_id=${item._id}&name=${item.img.name}`
            const result = await Axios.delete(url)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    return <li>

        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <img src={`/menu-imgs/${item.img.name}`} alt={item.title}/>

        <button>Editar</button>
        <button onClick={deleteMenuItem}>Eliminar</button>
 
        <style jsx>{`

            .container {
                
            }

            img {
                object-fit: cover;
                height: 400px;
                width: 200px;
            }

            li {
                list-style: none;
            }

            h4 {
                color: white;
            }

            p {
                color: white;
            }

        `}</style>
    </li>
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)