import React from 'react'
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";


function AppNav() {
    return (
        <Navbar className={"navbar navbar-fixed-top"}>
            <Container fluid>
            <div className="navbar-btn">
                <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu fa fa-bars"></i></button>
            </div>

            <div className="navbar-brand">
                <a href="http://www.wrraptheme.com/templates/lucid/university/html/light/index.html"><img src="" alt="Opzolut Logo" className="img-responsive logo" /></a>                
            </div>

            <div className="navbar-right">
                <form id="navbar-search" className="navbar-form search-form">
                    <input value="" className="form-control" placeholder="Search here..." type="text"/>
                    <button type="button" className="btn btn-default"><i className="icon-magnifier"></i></button>
                </form>                

                <div id="navbar-menu">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="http://www.wrraptheme.com/templates/lucid/university/html/light/events.html" className="icon-menu d-none d-sm-block d-md-none d-lg-block"><i className="icon-calendar"></i></a>
                        </li>
                        <li>
                            <a href="http://www.wrraptheme.com/templates/lucid/university/html/light/app-chat.html" className="icon-menu d-none d-sm-block"><i className="icon-bubbles"></i></a>
                        </li>
                        <li>
                            <a href="http://www.wrraptheme.com/templates/lucid/university/html/light/app-inbox.html" className="icon-menu d-none d-sm-block"><i className="icon-envelope"></i><span className="notification-dot"></span></a>
                        </li>
                        <li className="dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                                <i className="icon-bell"></i>
                                <span className="notification-dot"></span>
                            </a>
                            <ul className="dropdown-menu notifications">
                                <li className="header"><strong>You have 4 new Notifications</strong></li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-info text-warning"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Campaign <strong>Holiday Sale</strong> is nearly reach budget limit.</p>
                                                <span className="timestamp">10:00 AM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>                               
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-like text-success"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Your New Campaign <strong>Holiday Sale</strong> is approved.</p>
                                                <span className="timestamp">11:30 AM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                 <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-pie-chart text-info"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Website visits from Twitter is 27% higher than last week.</p>
                                                <span className="timestamp">04:00 PM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-info text-danger"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Error on website analytics configurations</p>
                                                <span className="timestamp">Yesterday</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="footer"><a href="javascript:void(0);" className="more">See all notifications</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle icon-menu" data-toggle="dropdown"><i className="icon-equalizer"></i></a>
                            <ul className="dropdown-menu user-menu menu-icon">
                                <li className="menu-heading">ACCOUNT SETTINGS</li>
                                <li><a href="javascript:void(0);"><i className="icon-note"></i> <span>Basic</span></a></li>
                                <li><a href="javascript:void(0);"><i className="icon-equalizer"></i> <span>Preferences</span></a></li>
                                <li><a href="javascript:void(0);"><i className="icon-lock"></i> <span>Privacy</span></a></li>
                                <li><a href="javascript:void(0);"><i className="icon-bell"></i> <span>Notifications</span></a></li>
                                <li className="menu-heading">BILLING</li>
                                <li><a href="javascript:void(0);"><i className="icon-credit-card"></i> <span>Payments</span></a></li>
                                <li><a href="javascript:void(0);"><i className="icon-printer"></i> <span>Invoices</span></a></li>                                
                                <li><a href="javascript:void(0);"><i className="icon-refresh"></i> <span>Renewals</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="http://www.wrraptheme.com/templates/lucid/university/html/light/page-login.html" className="icon-menu"><i className="icon-login"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            </Container>
        </Navbar>
    )
}

export default AppNav
