import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'


export const generarOrden = (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {

    //genero la orden
    const order = {
        buyer: datos,
        items: carrito.map((e1) => ({id: e1.id, price: e1.price, quantity: e1.quantity })),
        total: total,
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }
    
//envio la orden a firestore

//batch

    const db = getFirestore()
    const orders = db.collection('orders')
    const itemsToUpdate = db.collection('productos')
        .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(e1 => e1.id))

    const query = await itemsToUpdate.get()
    const batch = db.batch()

    const outOfStock = []

    query.docs.forEach((doc) => {
        const itemInCart = carrito.find(prod => prod.id === doc.id)

        if (doc.data().stock >= itemInCart.quantity) {
            batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
        } else {
            outOfStock.push({...doc.data(), id: doc.id})
        }
    })

    if (outOfStock.length === 0) {
        orders.add(order)
            .then((res) => {
                batch.commit()
                resolve(res.id) 
            })
    } else {
        reject(outOfStock)
    }
    })
}
