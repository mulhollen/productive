import React, { Component } from 'react';
import '../App.css';

import hero from '../img/home/hero.png';
import H1 from './h1';


class Hero extends Component {
    render() {
        return (
            <div className="">
                <div className="hero_img">
                    <H1 />
                </div>
            </div>
        );
    }
}

export default Hero;
