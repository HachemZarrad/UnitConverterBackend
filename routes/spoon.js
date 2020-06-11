const express = require('express');
const bodyParser = require('body-parser');
const spoonRouter = express.Router();
spoonRouter.use(bodyParser.json());

const spoonScales = ["pincee","demiCuilCafe","cuilCafe","cuilDessert","cuilSoupe"];

const PINCEE = 1;
const DEMICUILCAFE = 2;
const CUILCAFE = 5;
const CUILDESSERT = 10;
const CUILSOUPE = 15;

spoonRouter.route('/')
.post((req,res,next) => {
    var number;
    var quantity = req.body.value;
    var scale = req.body.scale;
    if(spoonScales.includes(scale) && quantity){
    switch(scale){
        case spoonScales[0]:
            number = Math.round(quantity / PINCEE); 

            break;

        case spoonScales[1]:
            number = Math.round(quantity / DEMICUILCAFE); 

            break;

        case spoonScales[2]:
            number = Math.round(quantity / CUILCAFE); 

            break;

        case spoonScales[3]:
            number = Math.round(quantity / CUILDESSERT); 

            break;

        case spoonScales[4]:
            number = Math.round(quantity / CUILSOUPE); 

            break;

    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(number + " " + scale);

    }
    else{
        err = new Error('wrong request');
        err.status = 404;
        return next(err);
    }


});


module.exports = spoonRouter;