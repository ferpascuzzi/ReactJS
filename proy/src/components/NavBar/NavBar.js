import React from 'react'
import {NavLink } from 'react-router-dom'
import {CartWidget} from './CartWidget'
import './navBar.scss'
import { Navbar, Container, NavbarBrand, NavDropdown} from 'react-bootstrap'

export const NavBar = ({logo}) =>{

return (
<header>

<Navbar className="bg-dark expand-lg me-auto">
    <Container>

        <NavLink exact to="/"><img src="/logoblack.png" alt="logo" className="mx-3"/>{logo}</NavLink>
        <NavbarBrand className="disabled text-light">MascoLand Store</NavbarBrand>

            <NavLink exact to="/" className="text-light">INICIO</NavLink>

            <NavDropdown id="dropNav" title="Productos" menuVariant="dark">
                <NavLink exact to="/productos" className="text-light">Ver todos</NavLink><br/>
                <NavLink exact to="/productos/Perro" className="text-light">Perros</NavLink><br/>
                <NavLink exact to="/productos/Gato" className="text-light">Gatos</NavLink>
            </NavDropdown>
        
            <NavLink exact to="/nosotros" className="text-light">Nosotros</NavLink>

            <NavLink exact to="/cart" className="text-light"><CartWidget/></NavLink>


    </Container>
</Navbar>


</header>
)
}
