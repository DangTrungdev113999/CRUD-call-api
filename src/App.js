import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div class="row">

                <nav class="navbar navbar-inverse">
                    <a class="navbar-brand" href="#">Call API</a>
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Something</a>
                        </li>
                    </ul>
                </nav>

                <div class="container">

                    <button type="button" class="btn btn-primary mb-10 left">Add New</button>

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title">Works list</h3>
                            </div>
                            <div class="panel-body">

                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">STT</th>
                                            <th class="text-center">Name</th>
                                            <th class="text-center">Price</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>iphone</td>
                                            <td>12000</td>
                                            <td>
                                                <span class="label label-success">active</span>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-warning">Update</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>iphone</td>
                                            <td>12000</td>
                                            <td>
                                                <span class="label label-success">active</span>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-warning">Update</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </td>

                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
