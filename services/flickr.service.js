var axios = require('axios');
const { CONSTANT_MSG } = require('../config/constant_messages');

module.exports.getUserData = async () => {
    try {
        let url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=mount+rainier&tagmode=any&format=json&_=1450853406890';
        const config = {
            method: 'POST',
            url: url
        };
        const { data } = await axios(config);

        if(data) {
            const result = data.slice(data.indexOf('(')+1, data.length-1);
            return JSON.parse(result);
        } else {
            return 0;
        }
        
    } catch (error) {
        console.log('error', error);
        return {
            statusCode: 500,
            status:  CONSTANT_MSG.STATUS.ERROR,
            message: error,
        };
    }
}
