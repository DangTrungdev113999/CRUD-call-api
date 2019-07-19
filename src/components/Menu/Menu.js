import React, { Component } from 'react';

class  Menu extends Component {
    render() {
        return (
            
            <nav className ="navbar navbar-inverse">
                <a className ="navbar-brand">Call Api</a>
                <ul className ="nav navbar-nav">
                    <li className ="active">
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Products</a>
                    </li>
                </ul>
            </nav>
            
        );
    }

}

export default Menu;
