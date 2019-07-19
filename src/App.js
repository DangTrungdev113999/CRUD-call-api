import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
// import Products from './components/Products/Products';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <div className="container">
                        <button type="button" className="btn btn-primary mb-10 left">
                            Add New
                        </button>
                        <div className="row">
                            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Products/>
                        </div> */}
                            {this.showContent(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContent = routes => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>
    }

}

export default App;
