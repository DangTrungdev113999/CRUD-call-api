import React, { Component } from 'react';
import Products from './../../components/Products/Products';
import Product from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class productListPage extends Component {

    componentDidMount() {
        this.props.onFetchAllProducts();
    }

    onDeleteProduct = id => {
        this.props.onDeleteProduct(id);
    }

    render() {
        let { products } = this.props;
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
        onFetchAllProducts: () => {
            dispatch(actions.actFetchAllProductsRequest());
        },
        onDeleteProduct: id => {
            dispatch(actions.actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(productListPage);