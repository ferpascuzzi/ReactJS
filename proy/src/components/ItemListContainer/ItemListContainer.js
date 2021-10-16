import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { pedirProductos } from '../../helper/pedirProductos'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()


    useEffect(()=>{
        setLoading(true)

        pedirProductos()
        .then((res) =>{

        if (categoryId) {
            setItems(res.filter(prod => prod.category === categoryId))
        } else {
            setItems (res)
        }
   
        })
        .catch((err) => console.log(err))
        .finally(()=> {
            setLoading(false)
            console.log("Fin del llamado")
        })
    },[categoryId])


    return (
        <section className="container my-5">
            {loading
            ? <p> Cargando... </p>
            : <ItemList productos={items}/>
            }
            </section>
    )
}