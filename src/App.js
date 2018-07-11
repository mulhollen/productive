import React, { Component } from 'react';
import './App.css';
import Navigation from './components/nav';
import Hero from './components/hero';
import CardTitle from './components/cardTitle';
import CardDescription from './components/cardDescription';

// img
import bestSellers from './img/home/bestSellers.png';
import currentSpecials from './img/home/currentSpecials.png';
import newItems from './img/home/newItems.png';
import hotList from './img/home/hotList.png';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <div className="d-flex flex-column justify-content-center pb-5">
          <CardDescription img={bestSellers} title="Best Sellers" buttonTitle="Shop School Here" description="Having the right materials makes all the difference when you want to succeed in school. Check out our cram cards and tabs to help you ace your next big test." />
          <CardTitle img={currentSpecials} title="Current Specials" />
          <CardTitle img={newItems} title="New Items" />
          <CardTitle img={currentSpecials} title="Download Templates" /> 
          <CardDescription img={hotList} title="Hot List" buttonTitle="Shop Office Here" description="Help your team and business excel by giving them the tools they need to invision and bring you products to life." />             
        </div>
      </div>
    );
  }
}

export default App;
