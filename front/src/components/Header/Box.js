import React, {Component}  from 'react';
import "./styles/box.scss";

class Box extends Component {

    render() {
return (
            <div class="box">
            <h2 class="box__title">{this.props.title}</h2>
            <h2 class="box__state">CEARÁ</h2>
            <h2 class="box__num">{this.props.num}</h2>
            </div>
         
      );
    };
  };


export default Box; 