var mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const mongoosePaginate = require ('mongoose-paginate')


var adminSchema = new Schema ({

    keyword: {type: String, required: false},
    data : {type: String, required: false},
},{
    collection: 'admin'
})

adminSchema.plugin (mongoosePaginate);



module.exports = mongoose.model('admin',adminSchema)