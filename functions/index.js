const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const fs = require("fs");


const app = express();
//conexion a la BD
admin.initializeApp({
    apiKey: "AIzaSyAw-dvzQ7KiN4_2JwKMTqQuMrQEWNzi9RA",
    authDomain: "fb-api-d7708.firebaseapp.com",
    projectId: "fb-api-d7708",
    storageBucket: "fb-api-d7708.appspot.com",
    messagingSenderId: "96341047620",
    appId: "1:96341047620:web:59b632638f0ef52f073f11",
    measurementId: "G-RF5LJNEKXB",
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://fb-api-d7708.firebaseio.com'
});

app.get('/hello-word', (req, res) => {
    return res.status(200).json({ message: 'Hello word' })
});

app.use(require('./routes/products.routes'));
exports.app = functions.https.onRequest(app);
