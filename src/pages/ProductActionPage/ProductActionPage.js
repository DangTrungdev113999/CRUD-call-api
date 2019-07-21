import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class productListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            ckhbStatus: false
        }
    }

    onGetValue = e => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    onSaveValue = e => {
        e.preventDefault();
        const { txtName, txtPrice, ckhbStatus } = this.state;
        const { history } = this.props;
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: ckhbStatus
        }).then(res => {
            history.goBack();
        })
    }

    render() {

        const { txtName, txtPrice, ckhbStatus } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Something</h3>
                            </div>
                            <div className="panel-body">
                                <form className="form-horizontal" onSubmit={this.onSaveValue}>
                                    <legend>Something</legend>

                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtName"
                                            value={txtName}
                                            onChange={this.onGetValue}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="txtPrice"
                                            value={txtPrice}
                                            onChange={this.onGetValue}
                                        />
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="ckhbStatus"
                                                value={ckhbStatus}
                                                onChange={this.onGetValue}
                                            />
                                            stocking
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onSubmit={this.onSaveValue}
                                    >
                                        Save
                                    </button>
                                    <Link
                                        to='/product-list'
                                        className="btn btn-warning ml-15"
                                    >
                                        Back
                                    </Link>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}
export default productListPage;