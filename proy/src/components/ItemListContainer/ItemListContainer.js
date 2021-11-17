import React, {useContext, useEffect, useState} from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
//import { pedirProductos } from '../../helper/pedirProductos'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const {loading, setLoading} = useContext(UIContext)

    const {categoryId} = useParams()


    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = categoryId 
                            ? db.collection('productos').where('category', '==', categoryId)
                            : db.collection('productos')

        productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setItems(newItems)
            })
            .catch((err) => console.log(err))
            .finally(() => {setLoading(false)}
            )

    },[categoryId, setLoading])


    return (
        <section className="container my-5">
            {loading
            ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            : <ItemList productos={items}/>
            }
            </section>
    )
}