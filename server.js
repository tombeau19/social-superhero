require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserController = require('./routes/UserController')
const SituationController = require('./routes/SettingController')
const SettingController = require('./routes/SettingController')
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

const connection = mongoose.connection;
connection.on('connected', () => {
console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});

app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

app.use('/api/users', UserController)
app.use('/api/users/:userId/settings', SettingController)
app.use('/api/users/:userId/settings/:settingId/situations', SituationController)


app.get('/', (req,res) => {
res.sendFile(__dirname + '/client/build/index.html')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log("Magic happening on port " + PORT);
})