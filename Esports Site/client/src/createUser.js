import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class createUser extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
          <div>
          <div id='signinContainer'>
               <form id='form'>       
                   <input className='username' type="text"
                   placeholder="Username">
                   </input>
                   <input className='password' type="text"
                   placeholder="Password">
                   </input>
                   <input className='input' type="text"   
                    placeholder="First Name"/>
                   <input className='input' type="text"  
                    placeholder="Last Name"/>          
                   <input className='input' type="text"  
                    placeholder="Email"/>          
                   <input className='input' type="password" 
                    placeholder="Password"/>
                    <input className='steamId' type="text"
                   placeholder="steam Id">
                   </input>
                   <input className='in-game Name' type="text"
                   placeholder="in-game Name">
                   </input>
                   <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholder="birthday"
                    />
                   <button id='submit'>Sign Up</button>
               </form>
          </div>
     </div>
      )
   }
}