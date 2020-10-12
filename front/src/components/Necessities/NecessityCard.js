import React, { Component } from 'react';
import "./style.scss";

class NecessityCard extends Component {

    render() {
        return (

            <>

                <div class="necessity-card" >
                    <div class="necessity-card__up">
                        <img
                            class="necessity-card__up--img"
                            src={this.props.img}
                            alt="necessity-img"
                        />
                    </div>
                    <div class="necessity-card__bottom">
                        <h3 class="necessity-card__title">{this.props.title}</h3>
                        <div class="necessity-card__btn">
                            <button class="necessity-card__btn--find">Achar Produto</button>
                            <button class="necessity-card__btn--contribute">Quero Contribuir</button>
                        </div>
                    </div>
                </div>


            </>
        );
    }

}

export default NecessityCard;

