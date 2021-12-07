import React from 'react';
import './NavBar.css';
import Logo from '../../logo-no-final.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget.js'


export default function NavBar(){
    return(
        <AppBar position="static">
        <nav>
            <div className="container-logo">
            <img src={Logo}/>
            </div>
            <ul>
                <li><Button variant="contained">Inicio</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
                <li><Button variant="contained">Ayuda</Button></li>
            </ul>
            <CartWidget/>
        </nav>
        </AppBar>
    )
}