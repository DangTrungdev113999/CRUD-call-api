import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Products',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (

            <nav className="navbar navbar-inverse">
                <a className="navbar-brand">Call Api</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>

        );
    }

    showMenus = menus => {
        let result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink
                    key = {index}
                    to = {menu.to}
                    activeOnlyWhenExact = {menu.exact}
                    lable = {menu.name}
                />
            })
        }
        return result;
    }

}

export default Menu;
