import React, { Component } from 'react';

class productListPage extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                        <form className="form-horizontal">
                            <legend>Something</legend>
                        
                            <div className="form-group">
                                <label for="">Product Name</label>
                                <input type="text" className="form-control" id="" placeholder="Input field"/>
                            </div>

                            <div className="form-group">
                                <label for="">Price</label>
                                <input type="number" className="form-control" id="" placeholder="Input field"/>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>
                                    stocking
                                </label>
                            </div>
                        
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                        
                    </div>
                </div>   
            </div>
            
            
        );
    }
}
export default productListPage;