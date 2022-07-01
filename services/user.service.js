const { CONSTANT_MSG } = require('../config/constant_messages');
const { getUserData } = require('./flickr.service');

exports.getUserData = async () => {
    try {
        // calling flickr service
        const data = await getUserData();
        if(data){
        return {
            statusCode: 200,
            status: CONSTANT_MSG.STATUS.SUCCESS,
            message: CONSTANT_MSG.GET_SUCCESS,
            data: data
        };
    } else {
        return {
            statusCode: 402,
            status: CONSTANT_MSG.STATUS.ERROR,
            message: CONSTANT_MSG.DATA_NOT_FOUND
        };
    }
    } catch (error) {
        console.log('error', error);
        return {
            statusCode: 500,
            status: CONSTANT_MSG.STATUS.ERROR,
            message: error.message
        };
    }
};