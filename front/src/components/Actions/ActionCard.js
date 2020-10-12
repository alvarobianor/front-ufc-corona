import React, {Component} from 'react';

class ActionCard extends Component {
render(){
    return(
        <>
        <div class="action-card" >
        
                <div class="action-card__text">
                    <img alt="card" src={this.props.image} class="action-card__image" />
                    <h1 class="action-card__text--title"> {this.props.title}</h1>
                    <h2 class="action-card__text--sub"> {this.props.sub}</h2>
                    <a class="action-card__text--link" href="opa">Saiba mais → </a>
                </div>
            </div>
        
        
        </>
    );
}   

}

export default ActionCard;









