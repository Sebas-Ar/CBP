require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages({
    env: {
        CBP_MONGODB_HOST: process.env.CBP_MONGODB_HOST,
        CBP_MONGODB_DATABASE: process.env.CBP_MONGODB_DATABASE,
    }
})