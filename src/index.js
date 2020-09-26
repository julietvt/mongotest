const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        minLength: 1,
    },
    lastName: {
        type: String,
        minLength: 1,
    },
    role: {
        type: String,
        enum: ['USER', 'MODERATOR', 'ADMIN'],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});
mongoose.connect('mongodb://localhost:27017/pd2020_dbtest',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, function (err) {
    if(err){console.log("Error connection");}
    else{console.log("Success connection!");}
});