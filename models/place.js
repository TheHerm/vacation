const Sequelize = require('sequelize');


let placeSchema = {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },

    city: {
        type: Sequelize.STRING,
        allowNull: false
    },

    state: {
        type: Sequelize.STRING,
        allowNull: false
    },

    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
        // validate: {
        //     len: [1,2]
        // }
    }
};

let placeConfig = {};





module.exports = function(database){
    return database.define("place", placeSchema, placeConfig)
}