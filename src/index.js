const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/pd2020_dbtest',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, function (err) {
    if(err){console.log("Error connection");}
    else{console.log("Success connection!");}
});

const yup = require('yup');
const emailValidSchema = yup.string().email();

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
        validate: {
            validator: value => emailValidSchema.validate(value),
        }
    }
    });

const User = mongoose.model('User',userSchema);

function insertUser(body) {
    const user = new User(body);
    user.save().then(console.log).catch(console.error);
}

insertUser({
    firstName: 'NewUser2',
    lastName: "NewSurnameUser2",
    email: 'newuser2@gmail.com',
    role: 'USER',
});

