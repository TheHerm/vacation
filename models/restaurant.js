const Sequelize = require('sequelize');

let restSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cuisine: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        },
        allowNull: false
    }
};

let restConfig = {};



module.exports = function(database){
    return database.define('restaurant', restSchema, restConfig);
}