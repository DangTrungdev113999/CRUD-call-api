import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class productAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editProduct) {
            const { editProduct } = nextProps;
            this.setState({
                id: editProduct.id,
                txtName: editProduct.name,
                txtPrice: editProduct.price,
                chkbStatus: editProduct.status
            })
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
        const { id, txtName, txtPrice, chkbStatus } = this.state;
        const product = {
            id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        this.props.onSaveValue(product);
    }

    render() {
        const { txtName, txtPrice, chkbStatus } = this.state;
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
                                                name="chkbStatus"
                                                value={chkbStatus}
                                                onChange={this.onGetValue}
                                                checked={chkbStatus}
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
export default productAction;