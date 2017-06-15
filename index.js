var app = require('express')()
var bodyParser = require('body-parser')

var data = [
  { id: 0, fullname: "John Doe", age: 30, email: "john@doe.com", },
  { id: 1, fullname: "Jane Doe", age: 20, email: "jane@doe.com", }
]
app.get('/', (req, res) => res.send(data))
app.get('/:id', (req, res) => res.send(data[req.params.id]))
app.post('/', bodyParser.json(), (req, res) => {
  var newData = {
    id:       data.length,
    fullname: req.body.fullname,
    age:      req.body.age,
    email:    req.body.email,
  }
  data.push(newData)
  res.send(newData)
})

var port = 9999;
app.listen(port)
console.log('Application started, listening to: ' + port);
