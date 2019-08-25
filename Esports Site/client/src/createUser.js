import React, { Component } from 'react';
import makeStyles from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DatePicker from "react-datepicker";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
import "react-datepicker/dist/react-datepicker.css";

export default class createUser extends Component {
    state = {
    }

    render() {
        return (
            <Row className='mainRow'>
                <Col xs="12">
                    <form noValidate autoComplete="off">
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                </Col>
            </Row>


            // <div>
            //     <form id='form'>
            //         <input className='username' type="text"
            //             placeholder="Username">
            //         </input>
            //         <input className='password' type="text"
            //             placeholder="Password">
            //         </input>
            //         <input className='input' type="text"
            //             placeholder="First Name" />
            //         <input className='input' type="text"
            //             placeholder="Last Name" />
            //         <input className='input' type="text"
            //             placeholder="Email" />
            //         <input className='input' type="password"
            //             placeholder="Password" />
            //         <input className='steamId' type="text"
            //             placeholder="steam Id">
            //         </input>
            //         <input className='in-game Name' type="text"
            //             placeholder="in-game Name">
            //         </input>
            //         <DatePicker
            //             selected={this.state.startDate}
            //             onChange={this.handleChange}
            //             placeholder="birthday"
            //         />
            //         <button id='submit'>Sign Up</button>
            //     </form>
            // </div>
            
        )
    }
}