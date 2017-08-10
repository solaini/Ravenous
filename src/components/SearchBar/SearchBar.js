import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
                    term: '',
                    location: '',
                    sortBy: 'best_match'};

        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    sortByOptions= {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count',
            }   

    getSortByClass (sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        let newOption = this.sortByOptions[sortByOption.target.innerText];
        console.log(newOption);
        this.setState({
            sortBy: newOption
        });
    }

    handleTermChange(e){
        this.setState({term: e.target.value})
    }
    handleLocationChange(e){
        this.setState({location: e.target.value})
    }
    handleSearch(e){
        let ter = this.state.term;
        let locat = this.state.location;
        let sor = this.state.sortBy;
        this.props.searchYelp(ter, locat, sor);
        e.preventDefault();
    }


    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return <li onClick={this.handleSortByChange} className={this.getSortByClass(sortByOptionValue)} 
            key={sortByOptionValue}>{sortByOption}</li>;
        });
    }

    render(){
        return(
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                 <ul>
                {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch} className={this.searchYelp}>Let's Go</a>
            </div>
        </div>)
    }  
}
export default SearchBar;

//Issue getting code to switch colors upon selection
//Issues with Instruction 23 for term, lcoation and sortBy