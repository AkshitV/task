var userService = require('../services/userService')

module.exports.task = async (req, res) => {

// const task = async (req, res) => {
    try {
        var data = await userService.get(req.body);
        console.log("datatatatatatatatatksmdkvnksdnv", data)
        console.log("sdasdasda",!data)
        if (!data) {
            console.log("idharrrr")
            data = await userService.login(req.body);  
        }
        console.log("yahan aaaayayayaya nahiii kyaaaaaaaaaaaa", data);
        return res.status(200).json({
            status: 200,
            data: data
        });
    } catch (error) {
        return res.status(201).json({
            status: 201,
            error: error
        });
    }
    
}