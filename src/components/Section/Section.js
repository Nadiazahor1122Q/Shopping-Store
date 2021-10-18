import React,{Component} from "react"
import './Section.css';
 import Products from '../Section/products';
 import Details  from "../Section/Details";
import { Route } from "react-router-dom";
import Carts from '../Section/Cart';
import Payment from '../Section/Payment';
 

 export  class  Section extends Component{


    render(){
        return(
      

           <div>

        <section>
     <Route exact path="/product" component={Products}/>
       <Route  path="/product/:id" component={Details}/>
       <Route path="/cart" component={Carts} />
     <Route path="/payment" component={Payment} />
        </section>
           </div>
          

        )
    }
 }
 
 export default  Section;