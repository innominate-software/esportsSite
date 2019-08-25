import React, { Component } from 'react';
import './App.css';
import logo from './assets/img/logo/dontfeedlogo.png';
import logoBrand from './assets/img/logo/dontFeedLogoBrand.png';
import dotaLogo from './assets/img/logo/dotaLogo.png';
import overwatchLogo from './assets/img/logo/overwatchLogo.png';
import csgoLogo from './assets/img/logo/csgoLogo.png';
import leagueLogo from './assets/img/logo/leagueOfLegendsLogo.png';
import rocketLeagueLogo from './assets/img/logo/rocketLeagueLogo.png';
import r6Logo from './assets/img/logo/r6Logo.png';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';

export default class mainNav extends Component {
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
      }
    render() {
        const { data } = this.state;
        return (
            <BrowserRouter>
                <Navbar className="navbar" light expand="md">
                    <NavbarBrand className="navHeader" href="/">
                        <img className="logoHeader" src={logo} alt="Logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='navLink' href="/">Things</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navLink' href="/">Stuff</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navLink' href="/">Junk</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className='navLink' nav caret>
                                    GAMES
                  </DropdownToggle>
                                <DropdownMenu className="gamesDropDown">
                                    <DropdownItem className="gamesDropDownItem">
                                        <span>
                                            <img className="dotaLogoDropDown" src={dotaLogo} alt="Logo" />
                                        </span>
                                        DOTA 2
                    </DropdownItem>
                                    <DropdownItem className="gamesDropDownItem">
                                        <span>
                                            <img className="dotaLogoDropDown" src={leagueLogo} alt="Logo" />
                                        </span>
                                        LEAGE OF LEGENDS
                    </DropdownItem>
                                    <DropdownItem className="gamesDropDownItem">
                                        <span>
                                            <img className="dotaLogoDropDown" src={overwatchLogo} alt="Logo" />
                                        </span>
                                        OVERWATCH
                    </DropdownItem>
                                    <DropdownItem className="gamesDropDownItem">
                                        <span>
                                            <img className="dotaLogoDropDown" src={csgoLogo} alt="Logo" />
                                        </span>
                                        CS:GO
                    </DropdownItem>
                                    <DropdownItem className="gamesDropDownItem">
                                        <span>
                                            <img className="dotaLogoDropDown" src={r6Logo} alt="Logo" />
                                        </span>
                                        Rainbow Six Seige
                    </DropdownItem>
                                    <DropdownItem className="gamesDropDownItem">
                                        <span>
                                            <img className="dotaLogoDropDown" src={rocketLeagueLogo} alt="Logo" />
                                        </span>
                                        ROCKET LEAGUE
                    </DropdownItem>
                                    {/* <DropdownItem divider />
                    <DropdownItem className="gamesDropDownItem">
                      ALL GAMES
                    </DropdownItem> */}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Button className='signupBtn' variant="outlined" href="signup">
                                    Sign Up
                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </BrowserRouter>
        );
    }
}