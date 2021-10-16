import React from 'react'
import {  useHistory } from 'react-router-dom'

export const ItemDetail = ({id, name, price, img, category}) => {
    
    const {goBack, push} = useHistory ()
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{category}</p>
            <h4>Precio: ${price}</h4>

        <button className="btn btn-secondary" onClick={() => goBack()}>Volver</button>

        <button className="btn btn-primary" onClick={() => push("/")}>Volver al Inicio</button>

        </div>
    )
}
