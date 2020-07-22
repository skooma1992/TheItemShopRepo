import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import AllItemsScreen from './screens/AllItems';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import SortedItemsScreen from './screens/SortedItemsScreen';




function App() {


  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin

  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="headerDiv">
          <header className="header">
            <div className="brand">

              <Link to="/"><img src="/images/item-shop-logo.png" alt="itemshoplogo"></img></Link>

            </div>
            <div className="searchbox-wrap">
              <input type="text"
                placeholder="Search for an Item..."
                className="searchbox"
              //onChange= {handleInput}
              //onKeyPress= {search} 
              />

            </div>

          <div className="headerLinks">
            <button className="signInbutt header-links">
              {/* IF THE USER IS SIGNED IN SHOW PROFILE PAGE IF NOT SHOW SIGN IN SCREEN */}
              {
                userInfo ? <Link to="/profile" className="userButt">{userInfo.name}</Link> :
                  <Link to="/signin" className="signButt">Sign In</Link>
              }

            </button>
            <button className="cartButt">
              <Link to = "cart/:id"><img src="/images/bit-13-512.png" alt="cart icon"></img></Link>
            </button>
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to ="/orders">Admin</Link>
                
              </div>
            )}
          </div>
        </header>

          
        </div>
        <main className="main">
          
          <div className="content">
            <Route path = "/sorted" component = {SortedItemsScreen}/>
            <Route path = "/orders" component = {OrdersScreen}/>
            <Route path = "/profile" component = {ProfileScreen}/>
            <Route path = "/order/:id" component = {OrderScreen}/>
            <Route path ="/allitems" component = {AllItemsScreen}/>
            <Route path = "/products" component = {ProductsScreen}/>
            <Route path = "/shipping" component = {ShippingScreen}/>
            <Route path = "/payment" component = {PaymentScreen}/>
            <Route path = "/placeorder" component = {PlaceOrderScreen}/>
            <Route path ="/signin" component={SigninScreen} />
            <Route path ="/register" component={RegisterScreen} />
            <Route path ="/product/:id" component={ProductScreen} />
            <Route path ="/cart/:id?" component={CartScreen} />
            <Route path ="/category/:id" compononent= {SortedItemsScreen}/>
            <Route path ="/" exact={true} component={HomeScreen} />
          
            
             
            
          </div>


        </main>
        <div className="footerDiv">
          <footer className="footer">
            <div className="footer-top">
              <div classname="footer-colone">1</div>
              <div classname="footer-coltwo">2</div>
              <div classname="footer-colthree">3</div>
              <div classname="footer-colfour">4</div>
            </div>
           
          </footer>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
