'use strict';

const mongoose = require('mongoose');
//const config = require('./../db/config.json');

/*
var cn = {
    host: config.development.mongo.host,
    port: config.development.mongo.port,
    database: config.development.mongo.db,
    user: config.development.mongo.user,
    password:  config.development.mongo.password,
    client_encoding: config.development.encoding,
    application_name: config.appName
};
*/

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`✔ MongoDB Server listening on: http://${DB_HOST}:${DB_PORT}`);
});

module.exports = {
  db
};
