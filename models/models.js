const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');
const Place = require('./place.js')(db);
const Restaurant = require('./restaurant.js')(db);
const Hotel = require('./hotel.js')(db);
const Activity = require('./activity.js')(db);

Restaurant.belongsTo(Place);

Hotel.belongsTo(Place);

Activity.belongsTo(Place);



module.exports = {
    db: db,
    place: Place,
    hotel: Hotel,
    restaurant: Restaurant,
    activity: Activity
};

