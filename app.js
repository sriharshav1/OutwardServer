const express = require('express')
const app = express();
var userCount=0;
const PORT = process.env.PORT || 3000;

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