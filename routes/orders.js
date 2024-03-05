const router = require('express').Router();
const { app } = require('apico/server.js');

/** Declare routes for Router */


/// http://localhost:3000/orders/all
router.post('/all', function( req, res ){
    res.json({"message":"OK"});
});


/// http://localhost:3000/orders/create
router.post('/create', function( req, res ){
    res.json({"message":"OK"});
});


/// http://localhost:3000/orders/update
router.post('/update', function( req, res ){
    res.json({"message":"OK"});
});


/// http://localhost:3000/orders/delete
router.post('/delete', function( req, res ){
    res.json({"message":"OK"});
});



app.use( '/orders', router );
