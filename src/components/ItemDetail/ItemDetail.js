import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
    <div key={producto.id} className="articulos">
        
        <img alt={producto.title} src={producto.image}/>
        <h2>{producto.title}</h2>
        <h3>{producto.category}</h3>
        <ItemCount />
        
    </div>
    )
}

export default ItemDetail