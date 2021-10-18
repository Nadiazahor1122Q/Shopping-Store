import React, { Component } from "react";
import './Home.css';



export class Home extends Component {


  render() {
    return (

      <>


        <img id="img" src="https://cdn.theatlantic.com/thumbor/Kh7MERWAjXh7T0DlGZDnxW9C7tU=/0x182:3500x2151/1600x900/media/img/mt/2015/07/25_original_24_/original.jpg" alt="" width="100%" />
        <div className="asos">
          <h1>This is NIKE</h1>
          <span>
          NIKE DESIGN and 850+ brands
          </span>
        </div>
        <div>

          <a href="SHOP NOW">
            <button className="btn1">SHOP NOW</button>
          </a>
        </div>

        <h1 className="last" >Last Product</h1>
        <div id="product">
          <div className="card" >
            <img src="./images/img3.png" alt="" />


            <div className="content">

              <span>$23</span>
              <p>Here are some custom show product shop</p>
              <button id="button">Add to Card</button>

            </div>
          </div>  <div className="card" >

            <img src="./images/img3.jpg" alt="" />

            <div className="content">

              <span>$23</span>
              <p>Here are some custom show product shop</p>

              <button id="button">Add to Card</button>

            </div>
          </div>
          <div className="card" >

            <img src="https://i.insider.com/560433ab9dd7cc1f008bcda2?width=1000&format=jpeg&auto=webp" alt="" />

            <div className="content">

              <span>$23</span>
              <p>Here are some custom show product shop</p>

              <button id="button">Add to Card</button>

            </div>
          </div>
          <div className="card" >

            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/90e2ea27-668f-4c68-a68b-3a051785aac4/sb-nyjah-free-2-skate-shoes-s4Kt9q.png" alt="" />

            <div className="content">

              <span>$23</span>
              <p>Here are some custom show product shop</p>

              <button id="button">Add to Card</button>

            </div>
          </div>
          <div className="card" >

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQciosLl893R1K3hZBorGUwYmTO0GL4zjLw&usqp=CAU" alt="" />

            <div className="content">

              <span>$23</span>
              <p>Here are some custom show product shop</p>
              <button id="button">Add to Card</button>

            </div>
          </div>
          <div className="card" >

            <img src="https://www.sastajoota.com/wp-content/uploads/2020/10/Nike-Run-Shoes-White.jpeg" alt="" />

            <div className="content">

              <span>$23</span>
              <p>Here are some custom show product shop</p>

              <button id="button">Add to Card</button>

            </div>
          </div>
        </div>
        
      </>
    )
  }
}

export default Home;