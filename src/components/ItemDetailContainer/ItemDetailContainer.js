
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [productoUnitario, setProductoUnitario] = useState({})
    const {id} = useParams();

    const getProduct = fetch(`https://fakestoreapi.com/products/${id}`, {
        method:"GET"
    })

    useEffect (() => {
        getProduct
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                setProductoUnitario(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    
    return (
        <div>
            <ItemDetail producto={productoUnitario}/>
        </div>
    )
}

export default ItemDetailContainer