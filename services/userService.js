
var adminModel = require ('../models/adminModel')
var jwt = require('jsonwebtoken');

exports.login = async function (admin, callback){
    console.log("admin, service ",admin)
    adminModel.findOne({userName: admin.user_name, password: admin.password}, function(err,result){

        if(err){
            return res.status(201)
            .json ({
                statusCode: 201,
                message: "Some error occured try again"
            })
        }

        else {
            console.log("result in services", result)
            if(result != null){

                var token = jwt.sign({ foo: result._id }, 'shhhhh');


                console.log("token",token)


                    if(result != null){

                    console.log("comes hereeeeeeeeeeeeeee")

                    adminModel.updateOne({_id: result.id}, {accessToken: token},{new:true}, function(err,resultt){
                        if(err){
                            return res.status(201)
                            .json ({
                                statusCode: 201,
                                message: "Some error occured try again"     
                            })
                        }
                        else{

                            console.log("result after updating",resultt)
                            callback(resultt)
                        }

                    })


                    }   
                    else {
                        console.log("here")
                    }
            }
            else{

                callback(null)
            }

        }
    })

}