require('dotenv').config()

module.exports = {
    env: {
        CBP_MONGODB_HOST: process.env.CBP_MONGODB_HOST,
        CBP_MONGODB_DATABASE: process.env.CBP_MONGODB_DATABASE,
    }
}