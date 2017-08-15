const clientId = 'LUuVdlEtcPt4LVMO1xy-AA';
const secret = 'lOugjPiymu2mFlF5WjOE9FZWkmpQD6Q5edMzOnobKrYQ5Ff0mi374XbGQXIALA6R';
const accessToken = '';

const Yelp = {
    getAccessToken() {
        if (accessToken === true){
            return new Promise(resolve => resolve(accessToken));
        }
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`, 
        {method: 'POST'}).then(response => {return response.json();
        }).then(jsonResponse => {
            accessToken = jsonResponse.access_token;
        });
    },
    search(term, location, sortBy){
        return Yelp.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: `Bearer ${accessToken}`
            });
        }).then(jsonResponse => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    id:  business.id,
                    imageSrc: business.image,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    }; 
                });
            }
        });
}

export default Yelp;


