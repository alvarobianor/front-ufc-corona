import React from 'react';

import Logo from '../../assets/svg/logopurple.svg';


import "./styles/navbar.scss";
const Navbar = () => (
<>

    <nav class="navbar pad-sm" >
        
        <img  src={Logo} alt="logo-combate-ao-covid-19" />


        <ul class="navbar__list">
            <li class="active"><a href="#home" class="navbar_link">Home</a></li>
            <li><a href="#actions" class="navbar_link"> Ações</a> </li>
            <li><a href="#productions" class="navbar_link">Produções</a></li>
            <li><a href="#necessity" class="navbar_link">Necessidades</a></li>
            <li><a href="#footer" class="navbar_link">Contatos</a></li>
        </ul>
        <div class="navbar__actions">
            <a href="opa">Cadastrar</a>
            
            <button href="/login">Login</button>
            
        </div>

  
    </nav>


</>
);
export default Navbar; 