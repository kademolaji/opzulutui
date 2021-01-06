import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,  Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import { NavLink as Pagelink } from "react-router-dom";

import UserImg from '../../assests/images/avatar1.jpg'

function Sidebar(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const dropdownToggle = (e) => {
        e.preventDefault();
        return setDropdownOpen(!dropdownOpen);
      }

   const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
      }
    return (
       
        <div className="sidebar-scroll">
            <div className="user-account">
                <img src={UserImg} className="rounded-circle user-photo" alt="User Profile Picture"/>
                <div className="dropdown">
                    <span>Welcome,</span>
                    {/* <a href="javascript:void(0);" className="dropdown-toggle user-name" data-toggle="dropdown"><strong>Pro. William</strong></a>
                    <ul className="dropdown-menu dropdown-menu-right account">
                        <li><a href="http://www.wrraptheme.com/templates/lucid/university/html/light/professors-profile.html"><i className="icon-user"></i>My Profile</a></li>
                        <li><a href="http://www.wrraptheme.com/templates/lucid/university/html/light/app-inbox.html"><i className="icon-envelope-open"></i>Messages</a></li>
                        <li><a href="javascript:void(0);"><i className="icon-settings"></i>Settings</a></li>
                        <li className="divider"></li>
                        <li><a href="http://www.wrraptheme.com/templates/lucid/university/html/light/page-login.html"><i className="icon-power"></i>Logout</a></li>
                    </ul> */}
                      <Dropdown
                
                isOpen={dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle className="user-name" caret nav>
                <strong>Pro. William</strong>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Action</DropdownItem>
                  <DropdownItem tag="a">Another Action</DropdownItem>
                  <DropdownItem tag="a">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
                </div>
                <hr/>
                <ul className="row list-unstyled">
                    <li className="col-4">
                        <span>Exp</span>
                        <h6>14</h6>
                    </li>
                    <li className="col-4">
                        <span>Awards</span>
                        <h6>13</h6>
                    </li>
                    <li className="col-4">
                        <span>Clients</span>
                        <h6>213</h6>
                    </li>
                </ul>
            </div>

          
             <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           <i className="icon-grid p-r-5"></i>Menu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           <i className="icon-settings p-r-5"></i>Settings
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <nav className="sidebar-nav">
            <Nav className="main-menu metismenu">
            {props.routes.map((prop, key) => {
              return (
                <li
                //   className={
                //     this.activeRoute(prop.path) +
                //     (prop.pro ? " active-pro" : "")
                //   }
                  key={key}
                >
                  <Pagelink
                    to={prop.layout + prop.path}
                    // className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <span>{prop.name}</span>
                  </Pagelink>
                 </li>
              );
            })}
          </Nav>
          </nav>
            {/* <nav className="sidebar-nav">
                        <ul className="main-menu metismenu">
                            <li><a href="index.html"><i className="icon-speedometer"></i><span>HR Dashboard</span></a></li>
                            <li><a href="app-holidays.html"><i className="icon-list"></i>Holidays</a></li>
                            <li><a href="app-events.html"><i className="icon-calendar"></i>Events</a></li>
                            <li><a href="app-activities.html"><i className="icon-badge"></i>Activities</a></li>
                            <li><a href="app-social.html"><i className="icon-globe"></i>HR Social</a></li>
                            <li className="">
                                <a href="#Employees" className="has-arrow" aria-expanded="false"><i className="icon-users"></i><span>Employees</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li className="active"><a href="emp-all.html">All Employees</a></li>
                                    <li><a href="emp-leave.html">Leave Requests</a></li>
                                    <li><a href="emp-attendance.html">Attendance</a></li>
                                    <li><a href="emp-departments.html">Departments</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#Accounts" className="has-arrow"><i className="icon-briefcase"></i><span>Accounts</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="acc-payments.html">Payments</a></li>
                                    <li><a href="acc-expenses.html">Expenses</a></li>
                                    <li><a href="acc-invoices.html">Invoices</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#Payroll" className="has-arrow"><i className="icon-credit-card"></i><span>Payroll</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="payroll-payslip.html">Payslip</a></li>
                                    <li><a href="payroll-salary.html">Employee Salary</a></li>                                    
                                </ul>
                            </li>
                            <li>
                                <a href="#Report" className="has-arrow"><i className="icon-bar-chart"></i><span>Report</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="report-expense.html">Expense Report</a></li>
                                    <li><a href="report-invoice.html">Invoice Report</a></li>                                    
                                </ul>
                            </li>
                            <li><a href="app-users.html"><i className="icon-user"></i>Users</a></li>
                            <li>
                                <a href="#Authentication" className="has-arrow"><i className="icon-lock"></i><span>Authentication</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="page-login.html">Login</a></li>
                                    <li><a href="page-register.html">Register</a></li>
                                    <li><a href="page-lockscreen.html">Lockscreen</a></li>
                                    <li><a href="page-forgot-password.html">Forgot Password</a></li>
                                    <li><a href="page-404.html">Page 404</a></li>
                                    <li><a href="page-403.html">Page 403</a></li>
                                    <li><a href="page-500.html">Page 500</a></li>
                                    <li><a href="page-503.html">Page 503</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav> */}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
          <h6>Choose Skin</h6>
                    <ul className="choose-skin list-unstyled">
                        <li data-theme="purple">
                            <div className="purple"></div>
                            <span>Purple</span>
                        </li>                   
                        <li data-theme="blue" className="active">
                            <div className="blue"></div>
                            <span>Blue</span>
                        </li>
                        <li data-theme="cyan">
                            <div className="cyan"></div>
                            <span>Cyan</span>
                        </li>
                        <li data-theme="green">
                            <div className="green"></div>
                            <span>Green</span>
                        </li>
                        <li data-theme="orange">
                            <div className="orange"></div>
                            <span>Orange</span>
                        </li>
                        <li data-theme="blush">
                            <div className="blush"></div>
                            <span>Blush</span>
                        </li>
                    </ul>
                    <hr/>
                    <h6>General Settings</h6>
                    <ul className="setting-list list-unstyled">
                        <li>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="checkbox"/>
                                <span>Report Panel Usag</span>
                            </label>
                        </li>
                        <li>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="checkbox"/>
                                <span>Email Redirect</span>
                            </label>
                        </li>
                        <li>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="checkbox" checked=""/>
                                <span>Notifications</span>
                            </label>                      
                        </li>
                        <li>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="checkbox" checked=""/>
                                <span>Auto Updates</span>
                            </label>
                        </li>
                        <li>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="checkbox"/>
                                <span>Offline</span>
                            </label>
                        </li>
                        <li>
                            <label className="fancy-checkbox">
                                <input type="checkbox" name="checkbox" checked=""/>
                                <span>Location Permission</span>
                            </label>
                        </li>
                    </ul>
          </Row>
        </TabPane>
      </TabContent>


        </div>

    )
}

export default Sidebar
