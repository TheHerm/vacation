const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes/routes.js');
const models = require('./models/models.js');

const env = nunjucks.configure('views', {nocache: true});
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

models.db.sync()
    .then(function(value){
        app.listen(2016, function(){
            console.log('server listening on shitty year');
        })
    }).catch(function(err){
        console.log(err);
});