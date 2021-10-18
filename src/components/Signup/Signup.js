import React, { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
    render() {
        return (
          
                <div     className="body">
                <div     className="container1">
                <form    className="form">
                <label   htmlFor="name">Name</label>
                <input   className="input1" type="text" id="name" name="Name" placeholder="Your Name" />
                <label   htmlFor="email">Email</label>
                <input   className="input1" type="text" id="lname" name="Email" placeholder="Your Email" />
                <label   htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  id="lname"
                  className="input1"
                  name="Mobile"
                  placeholder="Your Mobile Number"
                />
                <input type="submit"  className="input" />
              </form>
            </div>
          </div>

        )
    }
}

