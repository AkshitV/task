
var userService = require('../services/userService')




exports.login = function (req,res,callback) {


    console.log("req.body",req.body);

    try {
        
        userService.login(req.body, function(createdAdmin){
            console.log("callback in controller",createdAdmin)

            if(createdAdmin!= null){

                return res.status(200)
                .json ({
                    statusCode: 200,
                    message: "Login Successfull"
                })


            }
            else{
                return res.status(201)
                .json ({
                    statusCode: 201,
                    message: "Admin not found"
                })

            }



        })


    } catch (error) {
        return Response.json(201)
        .json ({
            statusCode: 201,
            message: "Some error occured, try again"
        })
    }
    


}