import React from 'react';

import "./footer.scss";
import LogoH from "../../assets/img/logo_ufc_horizontal.png";

const Footer = () => (
<>

<footer class="footer pad-sm" id="footer">
        <div class="footer__info">
            <img class="footer__logo"src={LogoH} alt="ufc-logo"/>
          
            <div class="footer__social">
                Midias Sociais
                <hr />
                <svg class="footer__social--icon">
                    <use href="insta"/>
                </svg>
                <svg class="footer__social--icon">
                    <use href="face"/>
                </svg>
                <svg class="footer__social--icon">
                    <use href="yot" />
                </svg>
                <svg class="footer__social--icon">
                    <use href="twiter"  />
                </svg>
            </div>
            <div class="footer__legal">
                ©2020 - Universidade Federal do Ceará
                <br />Todos os direitos reservados.
            </div>
        </div>

        <div class="footer__contact">
            <div class="footer__contact--title">
                <h1>Campi Name</h1>
                <svg class="right-arrow">
                    <use href="rig" />
                </svg>
            </div>

            <div class="footer__contact--campus-info">
                <div class="footer__contact--campus-info--icon-box">
                    <svg class="footer__contact--campus-info--icon">
                        <use href="in" />
                    </svg>
                </div>
                <div class="footer__contact--campus-info--text">
                    <h2>Local</h2>
                    Endereço
                </div>
            </div>

            <div class="footer__contact--campus-info">
                <div class="footer__contact--campus-info--icon-box">
                    <svg class="footer__contact--campus-info--icon">
                        <use href="pin "/>
                    </svg>
                </div>
                <div class="footer__contact--campus-info--text">
                    <h2>Telefone</h2>
                   Telefone
                </div>
            </div>
            <div class="footer__contact--campus-info">
                <div class="footer__contact--campus-info--icon-box">
                    <svg class="footer__contact--campus-info--icon">
                        <use href="clock" />
                    </svg>
                </div>
                <div class="footer__contact--campus-info--text">
                    <h2>Horário</h2>08:00h - 22:00h
                </div>
            </div>
        </div>
    </footer>

</>

);

export default Footer;