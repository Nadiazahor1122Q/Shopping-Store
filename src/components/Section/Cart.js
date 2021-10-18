import React, { Component } from 'react'
import './Cart.css';
import { DataContext } from "../Context/Context";
import './Details.css';
import { Link } from "react-router-dom";
import Colors from "./Color";

export class Carts extends Component {
    static contextType = DataContext;
    componentDidMount(){
        this.context.getTotal();
    }
    render() {
        const { cart, reduction, increase, removeProduct,total } = this.context;
        if(cart.length === 0){
            return <h3 style={{textAlign:"center"}} >Nothing product</h3>
        }else{
                 return (
                 <div id="section">
                {
                    cart.map(item => (
                        <div className="details cart" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item._id)} >-</button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item._id)}>+</button>
                                </div>
                                
                            </div>
                            <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                        </div>

                    ))
                }
                <div className="total">
                    <Link to="/payment">Payment</Link>
                    <h3>Total:${total}</h3>

                </div>
            </div>
        )
    }
}
}

export default Carts;
