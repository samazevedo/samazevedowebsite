import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="navbarStyle" dark expand="sm" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand id="brandName" className="mr-auto">
                            <span>Sam</span> Azevedo
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav className="nav" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span>About Me</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/portfolio">
                                        <span>PortFolio</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/skills">
                                        <span>Skills</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#contact">
                                        <span>Contact Me</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment >
        );
    }
}


export default Header;