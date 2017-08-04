import React from 'react';
import ReactDom from 'react-dom';
import './Business.css';

//Hardcoded business list moved to App.js

class Business extends React.Component{
    render(){


        return(
            <div className="Business">
                <div className="image-container">
                     <img src={business.imageSrc} alt={business.name}/>
                </div>
                <h2>MarginOtto Pizzeria</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state + ', '+ business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 className="rating">{business.rating} stars}</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
};
//ReactDom.render(<Business />, documents.getElementById(''));
export default Business;