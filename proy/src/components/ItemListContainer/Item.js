import React from 'react'
import {Card, Button} from 'react-bootstrap'


export const Item = ({id, name, price, img}) => {
    
    
    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>

                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>

    )
}