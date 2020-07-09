import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Search from './actions/Search';


function App() {

  const openMenu = () =>{
  document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  

  return (
<BrowserRouter>
  <div className="grid-container">

  <header className="header">
      <div className="brand">
          <button onClick={openMenu}>
              &#9776;
          </button>
          <Link to = "/">The Item Shop</Link>
          
      </div>
      <section className="searchbox-wrap">
            <input type="text" 
            placeholder="Search for an Item..." 
            className="searchbox" 
            //onChange= {handleInput}
            //onKeyPress= {search} 
            />
      </section>

      <section className="headerLinks">
        <button className="signInbutt"><a href="signin.html">Sign in</a></button>
        <a href="cart.html"><img src="/images/bit-13-512.png" alt="cart icon"></img></a>
      </section>
      
  </header>
  
 

  <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
          <li>
              <a href="index.html">Item category1</a>
          </li>
          <li>
              <a href="index.html">Item category2</a>
          </li>
      </ul>
  </aside>

  
  <main className="main"> 
      <div className="itemHeader">
        <div className="itemHeader-links">
            <button className="itembarIcon-1"><a href="index.html">Products 1</a></button>
            <button className="itembarIcon-2"><a href="index.html">Products 2</a></button>
        </div>
      </div>
      <div className="content">
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component = {CartScreen}/>
        <Route path="/" exact={true} component={HomeScreen} />
          
      </div>
    
  </main>
  <footer className="footer">All Rights Reserved</footer>
</div>
</BrowserRouter>
  
  );
}

export default App;
