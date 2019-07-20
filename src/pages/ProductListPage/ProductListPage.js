import React, { Component } from 'react';
import Products from './../../components/Products/Products';
import Product from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux'
import callApo from './../../utils/apiCaller';

class productListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        callApo('products', 'GET', null ).then(res => {
            this.setState({
                products: res.data
            })
        })
        
    }

    render() {
        // let { products } = this.props;
        let {products} = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary mb-10">
                    Add New
                </button>
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