//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/SearchBar';



class App extends React.Component{
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
