const clientId = 'LUuVdlEtcPt4LVMO1xy-AA';
const secret = 'lOugjPiymu2mFlF5WjOE9FZWkmpQD6Q5edMzOnobKrYQ5Ff0mi374XbGQXIALA6R';
const accessToken = '';

const yelp = {
    getAccessToken() {
        if (accessToken === true){
            return new Promise(resolve => resolve(accessToken));
        }
        return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`, 
        {method: 'POST'}).then(response => {return response.json();
        });
    }
}
