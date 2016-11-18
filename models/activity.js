const Sequelize = require('sequelize');


let activSchema = {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

let activConfig = {};




module.exports = function(database){
    return database.define('activities', activSchema, activConfig);
}