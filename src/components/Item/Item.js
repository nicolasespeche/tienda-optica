import React from 'react'
import "./Item.css"
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {
    return (
    <li key={producto.id} className="articulos">
        <img alt={producto.title} src={producto.image}/>
        <h2>{producto.title}</h2>
        <h3>{producto.category}</h3>
        <ItemCount />
        
    </li>
    
)
}

export default Item