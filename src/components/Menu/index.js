import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../../components/Button';

function Menu() {
    return (
        <nav className ="Menu"> 
            <a href ="/">
                <img className="Logo" src ={Logo} alt="RyanLogo"/>
            </a>

            <Button as="a" className="Button" href ="/">
                Newest Video
            </Button>
        </nav>
        );
}


export default Menu; //belezinha