const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
var userCount=0;
const PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
 
   
   res.json({ result: userCount++ });
  
  });

app.get('/add', function (req, res) {
console.log("in post");

//let searchParams = new URLSearchParams(url.search);
//console.log(searchParams.get('c')); 

 let value1 = req.query.value1;
 let value2 = req.query.value2;
 //searchParams.get('value1');
 //let value2 = searchParams.get('value2');
 console.log(Number(value1) + Number(value2));
 res.json({ result: Number(value1) + Number(value2) });

});

app.get('/sub', function (req, res) {
  console.log("in post");
   let value1 = req.query.value1;
   let value2 = req.query.value2;
   res.json({ result: Number(value1) - Number(value2) });
  
  });
  app.get('/mul', function (req, res) {
     let value1 = req.query.value1;
     let value2 = req.query.value2;

     console.log(Number(value1) * Number(value2));
     res.json({ result: Number(value1) * Number(value2) });
    
    });
    app.get('/div', function (req, res) {
       let value1 = req.query.value1;
       let value2 = req.query.value2;
       let result=(Number(value1) / Number(value2)).toFixed(2)
       console.log(result);
       res.json({ result: result });
      
      });
app.get('/', (req, res) => {
    userCount++;
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
   // res.write('Hello!\n');
    // res.write('We have had ' + userCount + ' visits!\n');
    // res.end();

  res.send('We have had ' + userCount + ' visits!\n')
});
app.get('/name', (req, res) => {
  res.send('hi john')
});

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});