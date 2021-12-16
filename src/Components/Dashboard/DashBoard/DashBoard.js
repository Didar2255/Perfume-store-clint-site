import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../image/Logo.png'
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div className='dashboard-container'>
            <div className="row">
                <div className="col-md-3">
                    <div className="dashboard-area">
                        <div>
                            <Link to='/home'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <hr />
                        <div className="dashboard">
                            <Link to='/dashboard/myOrder'>
                                <li className='dashboard-menu'> <i class="fas fa-list icon"></i> My Order</li>
                            </Link>
                            <Link to='/dashboard/payment'>
                                <li className='dashboard-menu'> <i class="fab fa-amazon-pay icon"></i> Payment</li>
                            </Link>
                            <Link to='/dashboard/manageOrder'>
                                <li className='dashboard-menu'> <i class="fas fa-tasks icon"></i> Manage Order</li>
                            </Link>
                            <Link to='/dashboard/addProducts'>
                                <li className='dashboard-menu'> <i class="fas fa-plus icon"></i> Add Products</li>
                            </Link>
                            <Link to='/dashboard/manageProducts'>
                                <li className='dashboard-menu'> <i class="fas fa-th-large icon"></i> Manage product</li>
                            </Link>
                            <Link to='/dashboard/makeAdmin' >
                                <li className='dashboard-menu'> <i class="fas fa-user-plus icon"></i> Make Admin</li>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;