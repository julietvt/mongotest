//console.log("Hello Mongo!!!");

const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', () => {
    process.exit(1);
});
db.once('open', function() {
    console.log('connected');
});

mongoose.connect('mongodb://localhost:27017/pd2020_dbtest',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});