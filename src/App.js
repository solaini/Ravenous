import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/yelp';

// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business,
// ];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }



  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
    //return 
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
