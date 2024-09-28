//Isabella Enriquez Lab 2
const express = require('express')

const router = express.Router()

router.use(express.urlencoded({extended: true}));

router.get('/', function (req, res) {
    res.send('CPAN212 Lab 2')
})

router.get('/name', function (req, res) {
    res.send('Isabella Enriquez')
})

router.get('/greeting', function (req, res) {
    res.send('Hello, Isabella Enriquez (n01628302)!')
})

//ex http://localhost:3000/add/x/4/y/1 will display "4 + 1 = 5"
router.get('/add/x/:xvalue/y/:yvalue', (req, res) => {
    res.send(req.params.xvalue + " + " + req.params.yvalue + " = " + (parseInt(req.params.xvalue) + parseInt(req.params.yvalue)))
})

//ex http://localhost:3000/calculate/a/4/b/2/o/* will display "4 * 2 = 8"
//ex http://localhost:3000/calculate/a/8/b/2/o/div will display "8 / 2 = 4"
    //couldn't accept "/" as a route parameter
router.get('/calculate/a/:avalue/b/:bvalue/o/:operator', (req, res) => {
    let output = ""
    if (req.params.operator == "div"){
        output += req.params.avalue + " / " + req.params.bvalue + " = ";
    }else{
        output = req.params.avalue + " " + req.params.operator + " " + req.params.bvalue + " = ";
    }
    
    if (req.params.operator == "+"){
        output += parseInt(req.params.avalue) + parseInt(req.params.bvalue)
        res.send(output)
    }
    else if (req.params.operator == "-"){
        output += parseInt(req.params.avalue) - parseInt(req.params.bvalue)
        res.send(output)
    }
    else if (req.params.operator == "*"){
        output += parseInt(req.params.avalue) * parseInt(req.params.bvalue)
        res.send(output)
    }
    else if (req.params.operator == "div"){
        output += parseInt(req.params.avalue) / parseInt(req.params.bvalue)
        res.send(output)
    }
    else if (req.params.operator == "**"){
        output += parseInt(req.params.avalue) ** parseInt(req.params.bvalue)
        res.send(output)
    }
    else{
        res.send("Invalid Operator: Must be +,-,*,div,**")
    }
})

module.exports = router