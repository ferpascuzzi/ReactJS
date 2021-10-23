import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState (init)
  
    const addToCart = (item) => {
      setCarrito([...carrito, item])
    }
  
    const removeItem = (itemId) => {
      const newCart = carrito.filter((prod) => prod.id !== itemId)
      setCarrito (newCart)
    }
  
    const calcQty = () => {
      return carrito.reduce((acc, prod) => acc + prod.quantity, 0)
    }
  
    const calcTotal = () => {
        return carrito.reduce ((acc, prod) => acc + prod.quantity * prod.price, 0)
    }

    const isInCart = (itemId) => {
      return carrito.some ((prod) => prod.id === itemId)
    }

    const emptyCart = () => {
      setCarrito([])
    }
  
    useEffect (()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
     
    
    
    return(
        <CartContext.Provider value={{
            carrito, addToCart, removeItem, calcQty, emptyCart, isInCart, calcTotal
        }}>
        
        {children}
        </CartContext.Provider>
    )
}



