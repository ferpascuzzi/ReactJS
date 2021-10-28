import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'

export const CartWidget =  () => {
    
    const {calcQty} = useContext(CartContext)

    return (
        <div style={{visibility: calcQty()===0 ? "hidden" : "visible"}}><FaShoppingCart/>
        <small>{calcQty()}</small>
        </div>



    )
}


