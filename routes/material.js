const express = require('express');
const bodyParser = require('body-parser');
const materialRouter = express.Router();
materialRouter.use(bodyParser.json());

const materials = ["sucre","farineOrdinaire", "riz", "maizena", "couscous", "cacao", "amandePoudre", "noixDeCocoRapee"];

const SUCRE = 45;
const FARINEORDINAIRE = 25;
const RIZ = 45;
const MAIZENA = 22;
const COUSCOUS = 40;
const CACOA = 25;
const AMANDEPOUDRE = 25;
const NOIXDECOCORAPEE  = 20;


materialRouter.route('/')
.post((req,res,next) => {
    
    var Constant;
    var quantity = req.body.value;
    var material = req.body.material;
    var conversion;
    if(quantity && materials.includes(material)){
      switch(material){
        case materials[0]:
            if(quantity >= 50){
            Constant = SUCRE;
            }
            else{
                conversion = 20;
            }
            break;

        case materials[1]:
            if(quantity >= 50){
                Constant = FARINEORDINAIRE;
            }
            else{
                conversion = 13;
            }
            break;

        case materials[2]:
            if(quantity >= 50){
                Constant = RIZ;
            }
            else{
                conversion = 20;
            }
            break;

        case materials[3]:
            if(quantity >= 50){
                Constant = MAIZENA;
            }
            else{
                conversion = 11;
            }
            break;  
            
        case materials[4]:
            if(quantity >= 50){
                Constant = COUSCOUS;
            }
            else{
                conversion = 20;
            }
            break;

        case materials[5]:
            if(quantity >= 50){
                Constant = CACOA;
            }
            else{
                conversion = 12;
            }
            break;

        case materials[6]:
            if(quantity >= 50){
                Constant = AMANDEPOUDRE;
            }
            else{
                conversion = 12;
            }
            break;

        case materials[7]:
            if(quantity >= 50){
                Constant = NOIXDECOCORAPEE;
            }
            else{
                conversion = 10;
            }
            break;

    }

    if(Constant){
       conversion = ruleOfThree(quantity, Constant);
    }

    res.setHeader('Content-Type', 'application/json');
    res.json(conversion + " g");

}

    else{
    err = new Error('wrong material request');
    err.status = 404;
    return next(err);
    }
    
});


function ruleOfThree(userInput, material){
     return (userInput * material) / 50;
}


module.exports = materialRouter;

