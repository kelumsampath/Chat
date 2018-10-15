var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dbURI = "mongodb://localhost:27017/chat";
mongoose.connect(dbURI, { useNewUrlParser: true });

// Throw an error if the connection fails
mongoose.connection.on('error', function(err) {
	if(err) throw err;
});


module.exports.user=mongoose.model('User',new Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{strict: false}));
module.exports.online=mongoose.model('online',new Schema({
    handle:String,
    connection_id:String
}));
module.exports.messages=mongoose.model('message',new Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
}));
