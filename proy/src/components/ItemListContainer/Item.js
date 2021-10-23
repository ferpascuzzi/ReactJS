import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Item = ({id, name, price, img, category}) => {
    
    
    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price}</Card.Text>
                <Card.Text>Animal: {category}</Card.Text>

                <Link to={`/detail/${id}`}>
                <Button variant="secondary">Ver Detalle</Button>
                </Link>
                
            </Card.Body>
        </Card>

    )
}
