import React, { Component } from 'react';
import '../App.css';

class h1 extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="h1_background mt-5 mb-4 mx-4">
                    <h1 className="p-3">Products for Productive People</h1>
                </div>
                <button className="btn_cta_teal" >Shop Now</button>
            </div>
        );
    }
}

export default h1;
