const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    created: {
        type: Date,
        required: true,
        default: Date.now()
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = CommentSchema;