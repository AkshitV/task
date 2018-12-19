var mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const mongoosePaginate = require ('mongoose-paginate')


var adminSchema = new Schema ({

    userName: {type: String, required: false},
    password : {type: String, required: false},
    accessToken: {type: String, required: false}
},{
    collection: 'admin'
})

adminSchema.plugin (mongoosePaginate);



module.exports = mongoose.model('admin',adminSchema)