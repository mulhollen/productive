import React, { Component } from 'react';
import '../App.css';


class CardTitle extends Component {
    render() {
        return (
            <div className="">
                <div className="img_div my-4">            
                    <img className="px-5 card_img" src={this.props.img} alt="card image" />
                </div>
                <div className="px-5">
                    <h3 className="mx-2">{this.props.title}</h3>
                </div>
            </div>
        );
    }
}

export default CardTitle;
