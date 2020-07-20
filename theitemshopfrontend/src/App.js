import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Search from './actions/Search';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import testFishData from './screens/fishTest';
//import 'bootstrap/dist/css/bootstrap.min.css';
import AllItemsScreen from './screens/AllItems';
import OrderScreen from './screens/OrderScreen';




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
              <button className="signInbutt">
                {/* IF THE USER IS SIGNED IN SHOW PROFILE PAGE IF NOT SHOW SIGN IN SCREEN */}
                {
                  userInfo ? <Link to="/profile" className="userButt">{userInfo.name}</Link> :
                    <Link to="/signin" className="signButt">Sign In</Link>
                }
              </button>
              <button className="cartButt">
                <a href="cart.html"><img src="/images/bit-13-512.png" alt="cart icon"></img></a>
              </button>
            </div>

          </header>
        </div>
        <main className="main">
          <div className="itemHeaderdiv">
            <header className="itemHeader">
              <div className="itemHeader-links"> 
                <button className="swButt"><Link to="/allitems" className="swButt"><img src="/images/swordIcon.png" alt="carrot icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="stButt"><img src="/images/staffIcon.png" alt="carrot icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="vButt"><img src="/images/carrotIcon.png" alt="carrot icon"></img></Link></button>
                <button className="swButt"><Link to="/testFish" className="fButt"><img src="/images/4.png" alt="fish icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="mButt"><img src="/images/meatIcon.png" alt="meat icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="sButt"><img src="/images/stairIcon.png" alt="stair icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="bButt"><img src="/images/broomIcon.png" alt="broom icon"></img></Link></button>
              </div>
            </header>
          </div>
          <div className="content">
            <Route path="/order/:id" component = {OrderScreen}/>
            <Route path="/allitems" component = {AllItemsScreen}/>
            <Route path="/products" component = {ProductsScreen}/>
            <Route path="/shipping" component = {ShippingScreen}/>
            <Route path="/payment" component = {PaymentScreen}/>
            <Route path="/placeorder" component = {PlaceOrderScreen}/>
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/Products" component={ProductsScreen} />
            <Route path = "/testFish" component = {testFishData}/>
          </div>


        </main>
        <div className="footerDiv">
          <footer className="footer">
            All Rights Reserved
          </footer>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
