import React, { Component } from 'react';
import Products from './../../components/Products/Products';
import Product from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux'
import callApo from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class productListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        callApo('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })

    }

    onDeleteProduct = id => {
        const {products} = this.state;
        callApo(`products/${id}`, 'DELETE', null).then(res => {
            if(res.status === 200) {
                const index = this.findIndex(products, id);
                if(index !== -1) {
                    products.splice(index, 1);
                    this.setState({
                        products
                    })
                }
            }
        })
    }

    findIndex = (products, id) => {
        let result = -1;
        products.forEach((product, index) => {
            if(product.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        // let { products } = this.props;
        let { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-primary mb-10">
                    Add New
                </Link>
                <div className="clearfix" ></div>
                <Products>
                    {this.showProducts(products)}
                </Products>
            </div>
        );
    }

    showProducts = products => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        index={index}
                        onDeleteProduct={this.onDeleteProduct}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(productListPage);