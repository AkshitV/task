
var Model = require ('../models/adminModel')
var fetch = require('node-fetch');
const axios = require('axios');


module.exports.login = async (data) => {
    try {
        var res = null;
        console.log("datatatatat0", data)
        var endpoint = "https://cloud.feedly.com/v3/search/feeds/?query="+ data.site_keyword ;
        console.log("endpoint :", endpoint);
        try {
            res = await axios.get(endpoint);
        }
        catch (e) {
            console.error(e);
        }

        var retries = 5;
        while ((res.status!=200) && retries > 0) {
            console.log("\nRetrying request...");
            try {
                res = await axios.get(endpoint);
            }
            catch (e) {
                console.error(e);
            }
            retries -= 1;
        }
        if (res.status!=200) {
            console.log("null")
            return null;
        }

        const obj = {
            keyword:data.site_keyword,
            data: JSON.stringify(res.data.results[0])
        }        
        var ress = await new Model(obj).save();
        console.log("ress", ress)
        return res.data.results[0];

    } catch (error) {
        console.error("error",error);
    }
};

module.exports.get = async (data) => {
    try{
        const res = await Model.findOne({
           keyword : data.site_keyword,
        });

        console.log("milaaaaaaaaaaaaaaa nahiiiiiii", res)

        if(!res){
            return null
        }
        return JSON.parse(res.data);
    } catch (error) {
        console.error("error",error);
    }

};    
