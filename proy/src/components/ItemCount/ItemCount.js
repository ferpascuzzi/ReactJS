import React from 'react'

export const ItemCount = ({quantity, modifyQuantity, max}) => {

    const handleRest = () => {
        if (quantity > 0 ) {
        modifyQuantity(quantity - 1)
        }
    }

    const handleSum = () => {
        if (quantity < max) {
        modifyQuantity(quantity + 1)
        }
    }


    return (
        <div>
            <button onClick={handleRest} className="btn btn-secondary me-2"> - </button>
            <span>{quantity}</span>
            <button onClick={handleSum} className="btn btn-secondary mx-2"> + </button>
        </div>
    )
}
