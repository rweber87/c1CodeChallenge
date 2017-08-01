// Dependencies
var express = require('express');
var router = express.Router();
var measurementObject = {'2015-09-01T16:00:00.000Z': {temperature: [22.4], dewPoint: [18.6], precipitation: [142.2] }
						};

// Routes
router.post('/measurements', function(req, res){
	res.send(measurementObject)
});

router.get('/measurements/:timestamp', function(req, res){
	res.send(measurementObject)
	console.log(req.body, "hitting this end point")
})

router.get('/measurements/:date', function(req, res){
	res.send(measurementObject)
})

router.put('/measurements/:timestamp', function(req, res){
	res.send(measurementObject)
})

router.patch('/measurements/:timestamp', function(req, res){
	res.send(measurementObject)
})

router.delete('/measurements/:timestamp', function(req, res){
	res.send(measurementObject)
})

router.get('/stats', function(req, res){
	res.send(measurementObject)
})

// Return Router
module.exports = router;