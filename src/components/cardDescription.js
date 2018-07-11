import React, { Component } from 'react';
import '../App.css';


class CardDescription extends Component {
    render() {
        return (
            <div className="">
                <div className="img_div my-4">
                    <img className="px-4 card_img"src={this.props.img} alt="card image" />
                </div>
                <div className="mx-4">
                    <h1 className="py-1">{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn_cta_teal">{this.props.buttonTitle}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDescription;
