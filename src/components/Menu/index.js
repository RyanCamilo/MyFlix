import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../../components/Button';

function Menu() {
    return (
        <nav className ="Menu"> 
            <Link to="/">
                <img className="Logo" src ={Logo} alt="RyanLogo"/>
            </Link>

            <Button as={Link} className="Button" to="cadastro/video">
                Newest Video
            </Button>
        </nav>
        );
}


export default Menu; //belezinha