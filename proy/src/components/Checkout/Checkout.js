import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { UIContext } from '../../context/UIContext'
import { Spinner } from 'react-bootstrap'
import { generarOrden } from '../../firebase/generarOrden'


export const Checkout = () => {

    const {loading, setLoading} = useContext(UIContext)
    const {carrito, calcTotal, emptyCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }

        if (values.apellido.length < 3) {
            alert("Apellido inválido")
            return
        }

        if (values.email.length < 3) {
            alert("Email inválido")
            return
        }

        if (values.tel.length < 7) {
            alert("Teléfono inválido")
            return
        }

        setLoading(true)
        try{ 
            generarOrden(values, carrito, calcTotal())
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Orden Registrada',
                        text: `Su código de operación es: ${res}`,
                        willClose: () => {
                            emptyCart()
                        }
                    })
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Producto sin stock',
                        text: `En este momento no tenemos stock de: ${err.map(e1 => e1.name).join(', ')}`
                    })
                })
                .finally(() => {
                    setLoading(false)
                })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error inesperado',
                text: err
            })
        }
    }

    return (

        <>

        {carrito.length === 0 && <Redirect to="/"></Redirect>}
        {loading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>}

        <div>
            <h2>Complete sus datos</h2>
            <hr/>

            <div className="container my-5">
                <form onSubmit={handleSubmit}>
                    <h2>Formulario</h2>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        />
                    {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                        />
                    {values.apellido.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                    <input
                        className="form-control my-2"
                        type="tel"
                        placeholder="Teléfono"
                        name="tel"
                        value={values.tel}
                        onChange={handleInputChange}
                    />
                    {values.tel.length === 0 && <small>Este campo es obligatorio</small>}

                    <button className="btn btn-success" type="submit" disabled={loading}>Finalizar</button>
                </form>
            </div>

        </div>
        </>
    )
}
