import React from 'react'
import "./ItemCount.css"
import {useState} from "react";


const ItemCount = () => {
    const [cont, setCont] = useState(1);
    const agregar = () => {
        setCont( cont + 1)
    };
    const quitar = () => {
        setCont( cont - 1)
    };
    return (
        <div className='contador'>
            <div className='botonesCarrito'>
                <button onClick={quitar}>-</button>
                    <div>
                        <span>{cont}</span>
                    </div>
                <button onClick={agregar}>+</button>
            </div>

            <div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount