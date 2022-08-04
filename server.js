//initiate express
const express = require('express');
const app = express();
//declare port
const PORT = process.env.PORT || 3003;
//declare variables for routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

//get routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

//middleware to connect stylesheets
app.use(express.static('public'));

//keep at end of file
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});