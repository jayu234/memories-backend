const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String,
            required: true
        }
    ],
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Memory", memorySchema);