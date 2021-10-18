import { Component } from "react"
import { DataContext } from "../Context/Context";
import { Link } from "react-router-dom";
import    './Products.css';


export class Products extends Component {
    static contextType = DataContext
    render() {
        const { products } = this.context;
        return (
            <div id="product" className="section">
                {
                    products.map(product => (
                        <div className="card"   key={product._id}>
                            <Link to={`/product/${product.title}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product.title}`}>
                                      {product.title}  
                                    </Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button id="button" onClick={()=>{
                                    this.context.addCart(product.title)
                                }} >Add to Cart</button>
                            </div>

                        </div>

                    ))
                }
            </div>
        )
    }
}
export default Products;