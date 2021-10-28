import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {FaTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const CartScreen = () => {

const {carrito, emptyCart, removeItem, calcTotal} = useContext(CartContext)

    return (
        <div className="container my-3">

            {carrito.length ===0
            ?<>
            <h2>Tu carrito de compras se encuentra vacío</h2>
            <Link to ="/" className="btn btn-secondary">Ir a comprar</Link>
            </>
            :
                <>

                <h2>Resumen de compra</h2>
                <hr/>

                {carrito.map ((prod) => (
                    <div>
                        <h4> {prod.name}</h4>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Precio: ${prod.price * prod.quantity}</p>
                        
                        <button className="btn btn-danger" onClick={()=> removeItem (prod.id)}>
                            <FaTrashAlt/></button>
                            <hr/>
                    </div>
                    
                    
                ))}
                
                <h3 className="my-3">Precio Total: ${calcTotal()}</h3>

                <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>

                </>
            }
        </div>
    )
}
