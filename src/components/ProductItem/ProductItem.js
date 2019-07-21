import React, { Component } from 'react';

class Products extends Component {

    onDeleteProduct = id => {
        //eslint-disable-next-line no-restricted-globals
        if(confirm('Are you sure want to delte it')) { 
            this.props.onDeleteProduct(id);
        }
    }

    render() {
        const { product, index } = this.props;
        const statusName = product.status ? 'stocking' : 'Out of stock';
        const statusClass = product.status ? 'success' : 'danger';
        return (
            <tr className="text-center">
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger ml-15"
                        onClick={() => this.onDeleteProduct(product.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

}

export default Products;
