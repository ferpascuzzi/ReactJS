import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
//import { pedirProductos } from '../../helper/pedirProductos'
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {

const [item, setItem] = useState(null)

const {loading, setLoading} = useContext(UIContext)

const {itemId} = useParams ()

useEffect(() => {

    setLoading(true)

    const db = getFirestore('productos')
    const productos = db.collection('productos')
    const item = productos.doc(itemId)

    item.get()
        .then((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })

}, [itemId, setLoading])

    return (
        <div>
      {
          loading ? <h2>Cargando...</h2>
          : <ItemDetail {...item}/>
      }      
        </div>
    )
}
