import React, { Component } from 'react';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import menu from '../img/menu.png';
import search from '../img/search.png';
import user from '../img/user.png';
import cart from '../img/cart.png';
import close from '../img/close.png';


class Navigation extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            icon: menu,
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen,
        }));

        if(this.state.icon != close){
            this.setState({
                icon: close
            })
        }
    }


  

    render() {
        return (
            <div className="nav_bar d-flex justify-content-between align-items-center px-3">
                <div>
                    <Dropdown isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle} >
                        <DropdownToggle className="hamberger_menu">
                            <img className="ic_menu" src={this.state.icon} alt="menu button" />                            
                        </DropdownToggle>
                        <DropdownMenu>
                            {/* right dropdown */}
                            <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                                <DropdownToggle className="drop_right">
                                   {/* main dropdown */}
                                    <DropdownItem><h3>Products ></h3></DropdownItem>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem><h3>Bags</h3></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><h3>Flags</h3></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><h3>Tags</h3></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem><h3>Dawgs</h3></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* end right dropdown */}
                            <DropdownItem divider />
                            <DropdownItem><h3>Download</h3></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><h3>Best Sellers</h3></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><h3>Hot List</h3></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><h3>Current Specials</h3></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><h3>New Items</h3></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><h3>About Us</h3></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><h3>Contact Us</h3></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                </div>
                <div>
                    <img className="ic_menu" src={search} alt="search icon" />
                    <img className="ic_menu mx-3" src={user} alt="user profile" />  
                    <img className="ic_menu" src={cart} alt="cart icon" />                                                          
                </div>
            </div>
        );
    }
}

export default Navigation;
