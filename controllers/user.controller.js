const { userService } = require('../services');
const { CONSTANT_MSG } = require('../config/constant_messages');


exports.getUserData = async (req, res) => {
  try {
    // calling user service
    const data = await userService.getUserData(req.body);
    return res.status(data.statusCode).send(data);
  } catch (error) {
    console.log("Error in Get User API: ", error);
    return res.status(500).send({ statusCode: 500, status: CONSTANT_MSG.STATUS.ERROR, message: error.message });
  }
};