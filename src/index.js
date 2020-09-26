const db = require('./db');
const User = require('./models/user.model');

function insertUser(body) {
    const user_obj = new User(body);
    user_obj.save().then(console.log).catch(console.error);
}

insertUser({
    firstName: 'NewUser3',
    lastName: "NewSurnameUser3",
    email: 'newuser3@gmail.com',
    role: 'ADMIN',
});

