const Sequelize = require('sequelize');

let hotelSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    num_stars: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },

    amenities: {
        type: Sequelize.TEXT,
        allowNull: false
    }
};

let hotelConfig = {};


module.exports = function(database){
    return database.define('hotel', hotelSchema, hotelConfig);
};