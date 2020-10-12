import React from 'react';

import Navbar from '../Header'
import SectionTitle from '../utils/SectionTitle.js'
import SwitchLight from '../utils/SwitchLight.js'
import Footer from '../Footer/'
import ActionCard from './ActionCard.js'
import "./style.scss";

const ActionPage = () => (
<>
<div class="action-page" >
        <Navbar />
        <div class="post pad-sm">
            <h1 class="post__title">action.title </h1>
            <h2 class="post__subtitle"> action.subtitle </h2>

            <div class="post__info">
                <div class="post__info--headers">
                    <h3> action.user.fullname </h3>
                    <h4>05 de abril de 2020 - 12h15</h4>
                    <h4>Última Atualizalição há uma hora</h4>
                </div>
                <div class="post__info--social">
                    <svg class="social-icon">
                        <use href="op" />
                    </svg>
                    <svg class="social-icon">
                        <use href="op"/>
                    </svg>
                    <svg class="social-icon">
                        <use href="op" />
                    </svg>
                    <svg class="social-icon">
                        <use href="op" />
                    </svg>
                </div>
            </div>

            <hr />

            <SwitchLight />

            <div class="post__content" ></div>

            <SectionTitle title="Recomendadas para você"></SectionTitle>

            <div class="post__recommended">
                <ActionCard />
            </div>
        </div>
        <Footer />
    </div>

</>

);

export default ActionPage;













