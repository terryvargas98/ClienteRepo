const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.set("view engine", "jade")

//routes
const Routes = require('./src/routes/sales');
app.use('/cliente', Routes);


app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(7000, function() {
    console.log('App is running, server is listening on port 7000');
});