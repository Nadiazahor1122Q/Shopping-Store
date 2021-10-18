
import React,{ Component }  from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { DataContext} from '../Context/Context';

 export  class  Header extends Component {
    static contextType = DataContext;
        state = {
            toggle: false
        }
    
     meunToggle =() =>{
         this.setState({toggle: !this.state.toggle})
 
     }
     render(){
         const {toggle} = this.state;
         const{cart} =this.context; 
     return (
         <header>
           
             
             <div className="meun" onClick={this.meunToggle}>
             <i class="fas fa-bars"></i>
             </div>
            <div className="logo">
                <h1><Link to="/">NIKE</Link></h1>
            </div>
            <nav>
        
                <ul className={toggle ? "toggle" : ""}>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/product">Prouduct</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/signup">Signup</Link></li>
                     <li className="close" onClick={this.meunToggle}>
                     <i class="fas fa-times"></i>
                     </li>
                </ul>
                <div className="nav-cart">
                   <span>{cart.length}</span>
                   <Link to='/cart'>
                   <i class="fas fa-shopping-cart" id="cart"></i>
                   </Link>

                 </div>
             </nav>
        
         </header>
     )
     }
 }

 export default Header ;
 

