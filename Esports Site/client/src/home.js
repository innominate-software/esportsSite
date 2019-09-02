import React, { Component } from 'react';
import axios from 'axios';
import SignUp from './createUser';

// UI Components
import './App.css';
import logo from './assets/img/logo/dontfeedlogo.png';
import logoBrand from './assets/img/logo/dontFeedLogoBrand.png';
import dotaLogo from './assets/img/logo/dotaLogo.png';
import overwatchLogo from './assets/img/logo/overwatchLogo.png';
import csgoLogo from './assets/img/logo/csgoLogo.png';
import leagueLogo from './assets/img/logo/leagueOfLegendsLogo.png';
import rocketLeagueLogo from './assets/img/logo/rocketLeagueLogo.png';
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


const title = {
  fontSize: '50px',
  color: 'red',
}
export default class Home extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  }
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }

  // // never let a process live forever
  // // always kill a process everytime we are done using it
  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  // getDataFromDb = () => {
  //   fetch('http://localhost:3001/api/getData')
  //     .then((data) => data.json())
  //     .then((res) => this.setState({ data: res.data }));
  // };

  // our put method that uses our backend api
  // to create new query into our data base
  // putDataToDB = (message) => {
  //   let currentIds = this.state.data.map((data) => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post('http://localhost:3001/api/putData', {
  //     id: idToBeAdded,
  //     message: message,
  //   }).then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   });
  // };

  // // our delete method that uses our backend api
  // // to remove existing database information
  // deleteFromDB = (idTodelete) => {
  //   parseInt(idTodelete);
  //   let objIdToDelete = null;
  //   this.state.data.forEach((dat) => {
  //     if (dat.id == idTodelete) {
  //       objIdToDelete = dat._id;
  //     }
  //   });

  //   axios.delete('http://localhost:3001/api/deleteData', {
  //     data: {
  //       id: objIdToDelete,
  //     },
  //   });
  // };

  // // our update method that uses our backend api
  // // to overwrite existing data base information
  // updateDB = (idToUpdate, updateToApply) => {
  //   let objIdToUpdate = null;
  //   parseInt(idToUpdate);
  //   this.state.data.forEach((dat) => {
  //     if (dat.id == idToUpdate) {
  //       objIdToUpdate = dat._id;
  //     }
  //   });

  //   axios.post('http://localhost:3001/api/updateData', {
  //     id: objIdToUpdate,
  //     update: { message: updateToApply },
  //   });
  // };

  // The breaks are to separate the test data from the real page.
  render() {
    const { data } = this.state;
    return (

      <BrowserRouter>

        <Navbar className="navbar" light expand="md">
          <NavbarBrand className="navHeader" href="/">
            <img className="logoHeader" src={logoBrand} alt="Logo" />
            or
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
                    LEAGUE OF LEGENDS
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
        <container>
          <Row className='mainRow'>
            <Col xs="3">
              <Card className="card leftTopSection">
                <CardHeader className="cardHeader slim">
                  Content 001
                  </CardHeader>
                <CardBody className="cardBody leftSectionCardBody">
                  <ExpansionPanel className="leftSectionExpansion">
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <Typography className="big fontBlack">Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel className="leftSectionExpansion">
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <Typography className="big fontBlack">Expansion Panel 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel className="leftSectionExpansion">
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <Typography className="big fontBlack">Expansion Panel 3</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel className="leftSectionExpansion">
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <Typography className="big fontBlack">Expansion Panel 4</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
            <Col>
              <Card className="card">
                <CardHeader className="cardHeader slim">
                  Content 002
                      </CardHeader>
                <CardBody className="cardBody">
                  <CardTitle className="openSans">Special Title Treatment</CardTitle>
                  <CardText className="openSans">With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="openSans">Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
              <Card className="card">
                <CardHeader className="cardHeader slim">
                  Content 003
                      </CardHeader>
                <CardBody className="cardBody">
                  <CardTitle className="openSans">Special Title Treatment</CardTitle>
                  <CardText className="openSans">With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="openSans">Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
            <Col xs="3">
              <Card className="card">
                <CardHeader className="cardHeader slim">
                  Content 004
                      </CardHeader>
                <CardBody className="cardBody">
                  <CardTitle className="openSans">Special Title Treatment</CardTitle>
                  <CardText className="openSans">With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className="openSans">Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
          </Row>



        </container>
        <div>
          <br>
          </br>
          <br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br>
          <Route exact={true} path='/signin' render={() => (
            <div className="App">
              <createUser />
            </div>
          )} />
          <ul>
            {data.length <= 0
              ? 'NO DB ENTRIES YET'
              : data.map((dat) => (
                <li style={{ padding: '10px' }} key={data.message}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> data: </span>
                  {dat.message}
                </li>
              ))}
          </ul>
          <div style={{ padding: '10px' }}>
            <input
              type="text"
              onChange={(e) => this.setState({ message: e.target.value })}
              placeholder="add something in the database"
              style={{ width: '200px' }}
            />
            <button onClick={() => this.putDataToDB(this.state.message)}>
              ADD
          </button>
          </div>
          <div style={{ padding: '10px' }}>
            <input
              type="text"
              style={{ width: '200px' }}
              onChange={(e) => this.setState({ idToDelete: e.target.value })}
              placeholder="put id of item to delete here"
            />
            <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
              DELETE
          </button>
          </div>
          <div style={{ padding: '10px' }}>
            <input
              type="text"
              style={{ width: '200px' }}
              onChange={(e) => this.setState({ idToUpdate: e.target.value })}
              placeholder="id of item to update here"
            />
            <input
              type="text"
              style={{ width: '200px' }}
              onChange={(e) => this.setState({ updateToApply: e.target.value })}
              placeholder="put new value of the item here"
            />
            <button
              onClick={() =>
                this.updateDB(this.state.idToUpdate, this.state.updateToApply)
              }
            >
              UPDATE
          </button>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}