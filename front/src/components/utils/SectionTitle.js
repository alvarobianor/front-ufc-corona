import React,{Component} from 'react';

import "./style.scss";



class SectionTitle extends  Component{

render(){
    return(
        <>

        <div class="section-title" >
                <h1 class="section-title__main">{this.props.title}</h1>
                <h2 class="section-title__sub">
                    {this.props.sub}
                    <slot></slot>
                </h2>
                <hr class="section-title__underline" />
        </div>

        </>
    );
}

}

export default SectionTitle;