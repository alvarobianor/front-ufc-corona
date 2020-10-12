import React, { Component } from 'react';



class ProductionsCard extends Component {
    render() {
        return (
            <>
                <div class="productions-card">
                    <h1 class="card_title">{this.props.title}</h1>
                    <img src={this.props.img} alt="productions-graphic" class="card_img" />
                </div>
            </>
        );
    }
}

export default ProductionsCard;