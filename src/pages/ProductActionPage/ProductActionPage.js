import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductAction from './../../components/ProductAction/ProductAction';
import * as actions from './../../actions/index';

class productActionPage extends Component {

    onSaveValue = product => {
        // const { txtName, txtPrice, chkbStatus, id } = this.state;
        // const { history } = this.props;
        // if (id) {
        //     callApi(`products/${id}`, 'PUT', {
        //         id,
        //         name: txtName,
        //         price: txtPrice,
        //         status: chkbStatus
        //     }).then(res => {
        //         history.goBack();
        //     })
        // } else {
        //     callApi('products', 'POST', {
        //         name: txtName,
        //         price: txtPrice,
        //         status: chkbStatus
        //     }).then(res => {
        //         history.goBack();
        //     })
        // }

        const { history } = this.props;
        this.props.onSaveValue(product);
        history.goBack();

    }

    render() {
        const { onSaveValue } = this.onSaveValue
        return (
            <ProductAction
                onSaveValue={ this.onSaveValue }
            />
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        onSaveValue: product => {
            dispatch(actions.actSaveProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(productActionPage);