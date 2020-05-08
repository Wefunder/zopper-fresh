import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Navbar from "./Navbar"
import Items from "./Items"


class App extends Component {
  // If you need to do something on load, you can use this.
  // componentDidMount() {
  // 
  // }

  render() {
    const { } = this.props;

    return (
      <div>
        <Navbar></Navbar>
        <Items></Items>
      </div>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
