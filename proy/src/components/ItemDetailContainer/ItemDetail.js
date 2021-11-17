import React, { useContext, useState } from 'react'
import {  Link, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, price, img, category, stock}) => {
    
    const {goBack, push} = useHistory ()
    
    const {addToCart, isInCart} = useContext (CartContext)

    const [quantity, setQuantity] = useState (0)

    const handleAdd = () => {
        const newItem = { 
        id,
        name,
        price,
        category,
        quantity,
    }

    if (quantity > 0) {
    addToCart(newItem)
    }
}

    return (
    <div className="container">
            <h2>{name}</h2>
            <p>{category}</p>
            <h4>${price}</h4>
        
        { isInCart (id) 
        ? <Link to="/cart" className="btn btn-secondary">Ver carrito</Link>
        : 
        <>

        <ItemCount quantity={quantity} modifyQuantity={setQuantity} max={stock}/>

        <br/>
        <button disabled={quantity === 0} className="btn btn-secondary"onClick={handleAdd}>Agregar a carrito</button>

        </>
        }

        <hr/>
        <button className="btn btn-secondary" onClick={() => goBack()}>Volver</button>
        <button className="btn btn-outline-secondary mx-3" onClick={() => push("/")}>Volver al Inicio</button>

    </div>

    )
}
