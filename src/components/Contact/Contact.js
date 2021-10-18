import React, { Component } from 'react'
import  './Contact.css';

export class Contact extends Component {
    render() {
        return (
          <section className="contact">
                 <div className="contact">
                 <h3>Contact Us</h3>
                 <p>A website’s contact page plays an important role in turning visitors into customers.</p>
               </div>
               <div className="container">
                 <div className="contactInfo">
                   <div className="box">
                     <div className="icon">
                     <i class="fas fa-map-marker-alt"></i>
                     </div>
                     <div className="text">
                      <h3>Address</h3>
                      <p>4567 Suger,<br/>Owatonna,Minnesota<br/>123450</p>
                     </div>
                   </div>
                   <div className="box">
                     <div className="icon">
                     <i class="fas fa-phone-alt"></i>
                     </div>
                     <div className="text">
                      <h3>Phone</h3>
                      <p>234-567-8976</p>
                     </div>
                   </div>
                   <div className="box">
                     <div className="icon">
                     <i class="far fa-envelope"></i>
                     </div>
                     <div className="text">
                      <h3>Email</h3>
                      <p>abc12@gmail.com</p>
                     </div>
                   </div>
                   <div className="container1">
             <div className="circle1" />
              <div className="circle2" />
            </div> 
            <div> 
              <form className="form2" id="form">
                <label  className="label" htmlFor="name">Name</label>
                <input className="input2" type="text" id="name" name="Name" placeholder="Your Name" />
                <label   className="label" htmlFor="email">Last Name</label>
                <input  className="input2" type="text" id="lname" name="Email" placeholder="Your Last Name" />
                <label htmlFor="mobile" className="label" >Mobile</label>
                <input
                  type="text"
                  id="lname"
                  className="input2"
                  name="Mobile"
                  placeholder="Your Mobile Number"
                />
                <input type="submit"  className="input3" />
              </form>
            </div> 


                       
                     
                 </div>
               </div>
                 
             

             </section>
        )
    }
}

export default Contact
