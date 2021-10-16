import React from 'react'
import {NavLink } from 'react-router-dom'
import {CartWidget} from './CartWidget'
import './navBar.css'

export const NavBar = ({logo}) =>{

return (
<header>

<h1 class="logo">{logo}</h1>

<nav class = "navBarTest">
    <NavLink exact to="/">Inicio</NavLink>
    <NavLink exact to="/productos/perro">Perros</NavLink>
    <NavLink exact to="/productos/gato">Gatos</NavLink>

    <NavLink exact to="/contacto">Contacto</NavLink>
    <NavLink exact to="/cart"><CartWidget/></NavLink>
    
</nav>


</header>
)
}
