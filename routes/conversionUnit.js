const express = require('express');
const bodyParser = require('body-parser');
const ConversionRouter = express.Router();
ConversionRouter.use(bodyParser.json());

const units = ["Litre","dl","cl","ml"];

ConversionRouter.route('/')
.post((req,res,next) => {
    requestUnit = req.body.requestUnit;
    responseUnit = req.body.responseUnit;
    value = req.body.value;
    coeff = 1;
    if(units.includes(requestUnit) && units.includes(responseUnit) && value){
    switch(requestUnit){
        case units[0]:
            if(responseUnit == units[1]){
                coeff = 10;
            }
            else if(responseUnit == units[2]){
                coeff = 100;
            }
            else if(responseUnit == units[3]) {
                coeff = 1000;
            }

            break;

        case units[1]:
            if(responseUnit == units[0]){
                coeff = 0.1;
            }
            else if(responseUnit == units[2]){
                coeff = 10;
            }
            else if(responseUnit == units[3]){
                coeff = 100;
            }

            break;

            case units[2]:
                if(responseUnit == units[0]){
                    coeff = 0.01;
                }
                else if(responseUnit == units[1]){
                    coeff = 0.1;
                }
                else if(responseUnit == units[3]) {
                    coeff = 10;
                }
    
                break;

            case units[3]:
                if(responseUnit == units[0]){
                    coeff = 0.001;
                }
                else if(responseUnit == units[1]){
                    coeff = 0.01;
                }
                else if(responseUnit == units[2]){
                    coeff = 0.1;
                }
    
                break;
        
     }

    value*=coeff;
    console.log("coefficient is here", coeff);
    console.log("value is here", value);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(value + " " + responseUnit);
}

else{
    err = new Error('Unit not found or value missed');
    err.status = 404;
    return next(err);
}

    
});

module.exports = ConversionRouter;