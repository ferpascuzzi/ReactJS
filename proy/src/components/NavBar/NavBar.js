import React from 'react'
import {CartWidget} from './CartWidget'
import './navBar.css'

export const NavBar = ({logo}) =>{

return (
<header>

<h1 class="logo">{logo}</h1>

<nav class = "navBarTest">
    <p>Inicio</p>
    <p>Perros</p>
    <p>Gatos</p>
    <p>Marcas</p>
    <p><CartWidget/></p>
</nav>


</header>
)
}