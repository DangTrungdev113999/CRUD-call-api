import React, { Component } from 'react';
import Products from './../../components/Products/Products';
import Product from './../../components/ProductItem/ProductItem';

class productListPage extends Component {
    render() {
        let products = [];
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary mb-10">
                    Add New
                </button>
                <div className="clearfix" ></div>
                <Products>
                    {this.showProduct(products)}
                </Products>
            </div>
        );
    }

    showProduct = products => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        index ={index}
                    />
                )
            })
        }
        return result;
    }
}
export default productListPage;