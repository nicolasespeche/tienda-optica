import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./ItemList/ItemList";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    
    
    // const traerArticulos = new Promise ((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve([
    //             "producto 1",
    //             "producto 2",
    //             "producto 3",
    //             "producto 4"
    //         ]);
    //     }, 2000);
    // });

    const getProducts = fetch('https://fakestoreapi.com/products',{
        method: "GET",
        headers: {
            "content-type":"json",
        }
    })
    
    useEffect(() => {
        getProducts
            .then((res)=> {
                return res.json();
            })
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        const filterProducts = products.filter((product) =>products.category === category );
        setProducts(filterProducts)
    },[category])
    
    return(
        <div>
            <h1>{greeting}</h1>
            
            <ItemList productos={products}/>
            
            {
                
            }
        </div>
    );
};

export default ItemListContainer