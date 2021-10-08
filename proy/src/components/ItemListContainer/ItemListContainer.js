import React, {useEffect, useState} from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
        .then((res) =>{
            setItems(res)
        })
        .catch((err) => console.log(err))
        .finally(()=> {
            setLoading(false)
            console.log("Fin del llamado")
        })
    },[])


    return (
        <section className="container my-5">
            {loading
            ? <p> Cargando... </p>
            : <ItemList productos={items}/>
            }
            </section>
    )
}