import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navigation from './layouts/navbar/Navbar'
import Index from './pages/index/Index'
import ProductList from './pages/productList/ProductList'
import ProductDetails from './pages/productDetails/ProductDetails'
import Signup from './pages/singup/Signup'
import Login from './pages/login/Login'

import authService from './../service/auth.service'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.authService = new authService()
  }


  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }

  render() {
    return (
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route path="/" exact render={() => <Index />} />

          <Route path="/shop" exact render={() => <ProductList />} />
          <Route path="/shop/product/:product_id" render={props => <ProductDetails {...props} />} />

          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
        </Switch>
      </>
    );
  }
}

export default App;
