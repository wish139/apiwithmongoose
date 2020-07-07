const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    id: {
        type: Number
    },
    first: {
        type: String
    },
    last: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);