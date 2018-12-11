let express = require('express')
var bodyParser = require('body-parser')
let app = express();
let url = require('url')
let most_recent=0;
let min=0;
let max=0;
let mean=0;
let range=0;
let querystring = require('querystring')
app.use(bodyParser.json());
//  for  parsing  application/json
app.use(bodyParser.urlencoded({ extended: true }));
//  for  parsing  application/x-www-form-urlencoded//  GET  method  route
app.get('/', function (request, response) {
  response.send('Following are the details fetched from a GET  request \n '+" most_recent is \n"+most_recent+" min is \n"+ min+" max is \n"+ max
  +" mean is \n"+ mean+" range is \n"+range)
   most_recent=0;
   min=0;
   max=0;
   mean=0;
   range=0;
})
//  POST  method route
app.post('/', function (request, response) {
  console.log("Body:  " + JSON.stringify(request.body))
  console.log("x is  " + request.body.reactiontime) 
  let x=request.body.reactiontime
  let y=x.split("&")
  console.log("y is "+y+" y0 "+ y[0]+" y1 "+y[1]+" y2 "+y[2])
  // if
  most_recent=parseInt(y[0])
  min=parseInt(y[1])
  max=parseInt(y[2])
  mean=parseInt(y[3])
  range=parseInt(y[4])
  console.log("most_recent is "+most_recent+"mean is "+ mean+" range is "+range)
  response.send('POST  request  to  the  homepage\n')
})
// app.listen(process.env.PORT || 3001, () => console.log('Example  app  listening  on  the port  3001!'))

module.exports = app;