import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

export default class createUser extends Component { 
  state = { 
      reqsMet: false,
      idToBeAdded: null,
      data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  }
  
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  putDataToDB = (e, username, password1, password2, firstName, lastName, email, steamId, ingameName) => {
    let reqsMet = false;
    let idToBeAdded = 0;
    let currentIds = this.state.data.map((data) => data.id);
    console.log(this.data);
    e.preventDefault();
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    console.log(password1.length);
    if(username, password1, password2, firstName, lastName, email, steamId, ingameName){
        if(password1.length >= 8){
            if(password1 === password2){
                console.log("success");
                reqsMet = true;
            }else{
                console.log("Your passwords do not match!");
            }
        } else{
            console.log("Your password is not long enough!");
        }
    }else{
        console.log("all the fields are not filled out");
        //all fields are 
    }
    console.log(reqsMet);
    if(reqsMet){
        Axios.post('http://localhost:3001/api/putData', {
            id: 100,
            username: username,
            firstName: firstName,
            lastName: lastName,
            steamId: steamId,
            password: password1,
            email: email,
            inGameName: ingameName
        });
    }
    

    

    // let currentIds = this.state.data.map((data) => data.id);
    // let idToBeAdded = 0;
    // while (currentIds.includes(idToBeAdded)) {
    //   ++idToBeAdded;
    // }

    // axios.post('http://localhost:3001/api/putData', {
    //   id: idToBeAdded,
    //   username: username,
    //   password: password,
    //   firstName: firstName,

    // });
  };

  render () {                                   
      return (
          <div>
          <div id='signinContainer'>
               <form id='form'>       
                   <input className='input' type="text"
                   onChange={(e) => this.setState({ username: e.target.value })}
                   placeholder="Username">
                   </input>
                   <input className='input' type="text"
                   onChange={(e) => this.setState({ password1: e.target.value })}
                   placeholder="Password">
                   </input>
                   <input className='input' type="password" 
                   onChange={(e) => this.setState({ password2: e.target.value })}
                    placeholder="Password"/>
                   <input className='input' type="text"   
                   onChange={(e) => this.setState({ firstName: e.target.value })}
                    placeholder="First Name"/>
                   <input className='input' type="text"  
                   onChange={(e) => this.setState({ lastName: e.target.value })}
                    placeholder="Last Name"/>          
                   <input className='input' type="text"  
                   onChange={(e) => this.setState({ email: e.target.value })}
                    placeholder="Email"/>          
                    <input className='input' type="text"
                    onChange={(e) => this.setState({ steamId: e.target.value })}
                   placeholder="steam Id">
                   </input>
                   <input className='input' type="text"
                   onChange={(e) => this.setState({ ingameName: e.target.value })}
                   placeholder="in-game Name">
                   </input>
                   <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholder="birthday"
                    />
                   <button id='submit' onClick={(e) => {this.putDataToDB(e, this.state.username, this.state.password1, 
                    this.state.password2, this.state.firstName, this.state.lastName, this.state.email, 
                    this.state.steamId, this.state.ingameName)}}>Sign Up</button>
               </form>
          </div>
     </div>
      )
   }
}