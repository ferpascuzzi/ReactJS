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

//"btn btn-outline-secondary me-2"
//"btn btn-outline-secondary mx-2"

    return (
        <div>
            <button 
                onClick={handleRest} 
                className={`btn ${quantity === 0 ? "btn-outline-secondary disabled me-2" : "btn-outline-secondary me-2"}`}> - 
            </button>

            <span>{quantity}</span>

            <button 
                onClick={handleSum} 
                className={`btn ${quantity === max ? "btn-outline-secondary disabled mx-2" : "btn-outline-secondary mx-2"}`}> + 
            </button>
        </div>
    )
}
