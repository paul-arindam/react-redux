import React,{ Component } from "react"
import Products from "./components/Products";

import data from "./data.json"


class App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      color:"",
      sort:""
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">Project</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>
          &copy; {date} All rights reserved
        </footer>
      </div>
    );
  }
}

var date=new Date().getFullYear();

export default App;
