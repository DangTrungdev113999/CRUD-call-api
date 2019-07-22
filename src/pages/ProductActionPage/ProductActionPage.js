import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductAction from './../../components/ProductAction/ProductAction';
import * as actions from './../../actions/index';

class productActionPage extends Component {

    onSaveValue = product => {
        const {  id } = product;
        const { history } = this.props;
        if (id) {
            this.props.onUpdateproduct(product);
        } else {
            this.props.onSaveValue(product);
        }
        history.goBack();
    }

    onEditProduct = id => {
        this.props.onEditProduct(id);
    }

    render() {
        const { match, editProduct } = this.props;
        return (
            <ProductAction
                onSaveValue={this.onSaveValue}
                onEditProduct={this.onEditProduct}
                match = {match}
                editProduct = { editProduct }
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        editProduct: state.productEditting
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        onSaveValue: product => {
            dispatch(actions.actSaveProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actions.actEditProductResquest(id));
        },
        onUpdateproduct: product => {
            dispatch(actions.actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(productActionPage);