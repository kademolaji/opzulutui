import React from 'react'

function MainContent() {
    return (
    
        <div className="container-fluid">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h2><a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth"><i className="fa fa-arrow-left"></i></a> Students</h2>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="http://www.wrraptheme.com/templates/lucid/university/html/light/index.html"><i className="icon-home"></i></a></li>                            
                            <li className="breadcrumb-item">Students</li>
                            <li className="breadcrumb-item active">All Students</li>
                        </ul>
                    </div>            
                    <div className="col-lg-6 col-md-4 col-sm-12 text-right">
                        <div className="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                        <button type="submit" class="btn btn-primary">Add New Student</button>
                            {/* <div className="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-width="1" data-line-color="#00c5dc" data-fill-color="transparent"><canvas width="112" height="20"></canvas></div>
                            <span>Visitors</span> */}
                        </div>
                        <div className="inlineblock text-center m-r-15 m-l-15 hidden-sm">
                            {/* <div className="sparkline text-left" data-type="line" data-width="8em" data-height="20px" data-line-width="1" data-line-color="#f4516c" data-fill-color="transparent"><canvas width="112" height="20" ></canvas></div>
                            <span>Visits</span> */}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row clearfix">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-hover table_custom table_avatar w35 mb-0">
                            <thead className="thead-primary">
                                <tr>                                       
                                    <th>Media</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                    <th>Number</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td ><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">OU 00456</span></td>
                                    <td>Joseph</td>
                                    <td>25</td>
                                    <td>70 Bowman St. South Windsor, CT 06074</td>
                                    <td>404-447-6013</td>
                                    <td><span className="badge badge-primary">MCA</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">KU 00789</span></td>
                                    <td>Cameron</td>
                                    <td>27</td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>404-447-4569</td>
                                    <td><span className="badge badge-warning">Medical</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">KU 00987</span></td>
                                    <td>Alex</td>
                                    <td>23</td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>404-447-7412</td>
                                    <td><span className="badge badge-info">M.COM</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">OU 00951</span></td>
                                    <td>James</td>
                                    <td>23</td>
                                    <td>44 Shirley Ave. West Chicago, IL 60185</td>
                                    <td>404-447-2589</td>
                                    <td><span className="badge badge-default">MBA</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">OU 00953</span></td>
                                    <td>charlie</td>
                                    <td>21</td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>404-447-9632</td>										
                                    <td><span className="badge badge-success">BBA</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">OU 00456</span></td>
                                    <td>Joseph</td>
                                    <td>25</td>
                                    <td>70 Bowman St. South Windsor, CT 06074</td>
                                    <td>404-447-6013</td>
                                    <td><span className="badge badge-primary">MCA</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">KU 00789</span></td>
                                    <td>Cameron</td>
                                    <td>27</td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>404-447-4569</td>
                                    <td><span className="badge badge-warning">Medical</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">KU 00987</span></td>
                                    <td>Alex</td>
                                    <td>23</td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>404-447-7412</td>
                                    <td><span className="badge badge-info">M.COM</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">OU 00951</span></td>
                                    <td>James</td>
                                    <td>23</td>
                                    <td>44 Shirley Ave. West Chicago, IL 60185</td>
                                    <td>404-447-2589</td>
                                    <td><span className="badge badge-default">MBA</span></td>
                                </tr>
                                <tr>
                                    <td><img className="rounded" src="" alt=""/></td>
                                    <td><span className="list-name">OU 00953</span></td>
                                    <td>charlie</td>
                                    <td>21</td>
                                    <td>123 6th St. Melbourne, FL 32904</td>
                                    <td>404-447-9632</td>										
                                    <td><span className="badge badge-success">BBA</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul className="pagination pagination-primary mt-3">
                        <li className="page-item disabled"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">4</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default MainContent
