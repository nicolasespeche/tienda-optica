import Item from '../Item/Item'
import "./ItemList.css"
import {Link} from "react-router-dom"

const ItemList = ({ productos }) => {
    return (
        <ul className='listaArticulos'>
            {productos.map((producto) =>(
                <Link key={producto.id} to={`item/${producto.id}`}>
                    <Item  producto={producto}/>
                </Link>
                
            ))}
        </ul>
    )
}

export default ItemList