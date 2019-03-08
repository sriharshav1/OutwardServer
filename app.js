const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// Setting up the cors policy the application is set currently to accept all the endpoints
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
var userCount=0;
// Handling the dynamic port condition
const PORT = process.env.PORT || 3001;
// Home route to calculate all the visitors in the server running state
app.get('/', function (req, res) {
 
   
   res.json({ result: userCount++ });
  
  });
// route to calculate and send the addition request
app.get('/add', function (req, res) {

 let value1 = req.query.value1;
 let value2 = req.query.value2;

 console.log(Number(value1) + Number(value2));
 res.json({ result: Number(value1) + Number(value2) });

});
// route to calculate and send the substraction request
app.get('/sub', function (req, res) {
  console.log("in post");
   let value1 = req.query.value1;
   let value2 = req.query.value2;
   res.json({ result: Number(value1) - Number(value2) });
  
  });
  // route to calculate and send the multiplication request
  app.get('/mul', function (req, res) {
     let value1 = req.query.value1;
     let value2 = req.query.value2;

     console.log(Number(value1) * Number(value2));
     res.json({ result: Number(value1) * Number(value2) });
    
    });
   // route to calculate and send the division request
    app.get('/div', function (req, res) {
       let value1 = req.query.value1;
       let value2 = req.query.value2;
       let result=(Number(value1) / Number(value2)).toFixed(2)
       console.log(result);
       res.json({ result: result });
      
      });

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});