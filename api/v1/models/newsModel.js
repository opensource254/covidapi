const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true,
    },
    timestamp: {
        type: String,
        default: 0,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true,
    },
    screen_name: {
        type: String,
        trim: true,
        required: true,
    },
    img_urls: {
        type: Array,
        trim: true,
        required: true,
    },
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;
