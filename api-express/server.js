const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


// get
const { blockController, blockDetailController } = require('./controllers/blockControlerers');
const {  blockLogogFormData, blockLogoFormDataDetailControlller } = require('./controllers/login-form-dataControlers');
const { blockUsers,  blockUsersDetailController } = require('./controllers/usersControlers');

const app = express();

app.use(bodyParser.json());




// Маршруты для получения данных get
app.get('/titles', blockController);
app.get('/titles/:id', blockDetailController);

app.get('/login-form-data', blockLogogFormData);
app.get('/login-form-data/:id', blockLogoFormDataDetailControlller);

app.get('/users', blockUsers);
app.get('/users/:id', blockUsersDetailController);


const PORT = process.env.PORT;
const PORT1 = process.env.PORT1;


// Start the server on multiple ports
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT1, () => {
    console.log(`Express.js app listening at http://localhost:${PORT1}`);
});
