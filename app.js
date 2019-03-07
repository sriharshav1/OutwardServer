const express = require('express')
const app = express();
var userCount=0;
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

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});