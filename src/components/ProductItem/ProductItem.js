import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>iphone</td>
                <td>12000</td>
                <td>
                    <span className="label label-success">active</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

}

export default Products;
