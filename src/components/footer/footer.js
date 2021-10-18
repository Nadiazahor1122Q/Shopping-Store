  import React from 'react';
  import './footer.css';
  import { Link } from 'react-router-dom';
  export default function Footer() {
      return (
<>
  {/* footer section  */}
  <section id="footer-section" className="footer">
    <div className="share">
      <a href="#" className="btn">
        Facebook
      </a>
      <a href="#" className="btn">
        Twitter
      </a>
      <a href="#" className="btn">
        Instagram
      </a>
      <a href="#" className="btn">
        You Tube
      </a>

    </div>
   
  </section>
</>
          
      )
  }
  
